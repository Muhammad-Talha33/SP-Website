"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, RefreshCw, Clock } from "lucide-react";

interface DailyContent {
  arabic: string;
  translation: string;
  reference: string;
  type: "ayah" | "hadith";
  bookname?: string;
  narrated?: string;
}

const Home: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<DailyContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState<string>("...");
  const [hijriDate, setHijriDate] = useState<string>("...");
  const [todaySurah, setTodaySurah] = useState<string>("Loading...");
  const [prayersToday, setPrayersToday] = useState<string>("Loading...");

  // ========================== ⭐ LOCAL STORAGE LOADING ⭐ ==========================

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-CA");

    // Load Daily Inspiration
    const savedContent = localStorage.getItem("daily-roshni");
    const savedDate = localStorage.getItem("daily-roshni-date");

    if (savedContent && savedDate === today) {
      setCurrentContent(JSON.parse(savedContent));
    }

    // Load Today's Surah
    const savedSurah = localStorage.getItem("today-surah");
    const savedSurahDate = localStorage.getItem("today-surah-date");

    if (savedSurah && savedSurahDate === today) {
      setTodaySurah(savedSurah);
    }
  }, []);

  // ========================== ⭐ SAVE DAILY INSPIRATION ⭐ ==========================
  useEffect(() => {
    if (currentContent) {
      localStorage.setItem("daily-roshni", JSON.stringify(currentContent));
      const today = new Date().toLocaleDateString("en-CA");
      localStorage.setItem("daily-roshni-date", today);
    }
  }, [currentContent]);

  // ========================== ⭐ SAVE TODAY'S SURAH ⭐ ==========================

  useEffect(() => {
    if (todaySurah && todaySurah !== "Loading...") {
      const today = new Date().toLocaleDateString("en-CA");
      localStorage.setItem("today-surah", todaySurah);
      localStorage.setItem("today-surah-date", today);
    }
  }, [todaySurah]);

  // ========================== ⭐ NEXT DAY RESET ⭐ ==========================

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-CA");

    const savedDate = localStorage.getItem("daily-roshni-date");
    const savedSurahDate = localStorage.getItem("today-surah-date");

    // Reset Inspiration
    if (savedDate && savedDate !== today) {
      localStorage.removeItem("daily-roshni");
      localStorage.setItem("daily-roshni-date", today);
      setCurrentContent(null);
    }

    // Reset Surah
    if (savedSurahDate && savedSurahDate !== today) {
      localStorage.removeItem("today-surah");
      localStorage.setItem("today-surah-date", today);
      setTodaySurah("Loading...");
    }
  }, []);

  // ====================================================================

  // 🕓 Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // 🕋 Fetch Hijri Date + Prayer Times
  useEffect(() => {
    const fetchPrayerAndHijri = async () => {
      try {
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress?address=Karachi,Pakistan&method=1&school=1`
        );
        const data = await res.json();
        const hijri = data.data.date.hijri;
        setHijriDate(`${hijri.day - 1} ${hijri.month.en} ${hijri.year}`);

        const timings = data.data.timings;
        const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
        const now = new Date();
        let next = "";
        let prayed = 0;

        for (const name of prayerNames) {
          const [hour, minute] = timings[name].split(":");
          const prayerTime = new Date();
          prayerTime.setHours(parseInt(hour), parseInt(minute), 0);
          if (now > prayerTime) prayed++;
          if (!next && now < prayerTime) next = name;
        }

        setNextPrayer(next || "Fajr (Tomorrow)");
        setPrayersToday(`${prayed}/5`);
      } catch (err) {
        console.error("Prayer API failed:", err);
      }
    };
    fetchPrayerAndHijri();
  }, []);

  // 📖 Fetch random Quran Ayah
  const fetchRandomAyah = async (): Promise<DailyContent> => {
    const randomAyah = Math.floor(Math.random() * 6236) + 1;

    const arabicRes = await fetch(
      `https://api.alquran.cloud/v1/ayah/${randomAyah}/quran-uthmani`
    );

    const englishRes = await fetch(
      `https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`
    );

    const arabicData = await arabicRes.json();
    const englishData = await englishRes.json();

    return {
      arabic: arabicData.data.text,
      translation: englishData.data.text || "Translation unavailable",
      reference: `${arabicData.data.surah.englishName} (${arabicData.data.numberInSurah})`,
      type: "ayah",
    };
  };

  // 📜 Fetch random Hadith
  const fetchRandomHadith = async (): Promise<DailyContent> => {
    try {
      const randomAyah = Math.floor(Math.random() * 7563) + 1;
      const res = await fetch(
        `https://random-hadith-generator.vercel.app/bukhari/${randomAyah}`
      );
      const data = await res.json();

      return {
        bookname: `Book Name:${data.data.bookName}`,
        arabic: `${data.data.chapterName}`,
        translation: data.data.hadith_english,
        reference: data.data.refno,
        narrated: data.data.header,
        type: "hadith",
      };
    } catch {
      return {
        arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
        translation: "Verily, actions are but by intentions.",
        reference: "Sahih Bukhari",
        type: "hadith",
      };
    }
  };

  // 🕊 Button Action
  const handleRoshniClick = async () => {
    setIsLoading(true);
    try {
      const isAyah = Math.random() > 0.5;
      const content = isAyah ? await fetchRandomAyah() : await fetchRandomHadith();

      setCurrentContent(content);

      const surahName = isAyah
        ? content.reference.split("(")[0].trim()
        : "Hadith of the Day";

      setTodaySurah(surahName);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="space-y-10 light:bg-[#fdfaf6] min-h-screen p-4 transition-colors duration-500 md:right-72 md:relative">

      {/* WELCOME SECTION */}
      <div className="text-center space-y-4 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-emerald-900 py-12 rounded-2xl shadow-md border border-emerald-200 dark:border-emerald-700">
        <h1 className="text-4xl font-bold text-emerald-800 dark:text-emerald-300">
          Bismillah-ir-Rahman-ir-Rahim
        </h1>
        <p className="text-xl text-amber-700 dark:text-amber-400 font-serif">
          بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </p>
        <div className="md:flex md:flex-col md:items-center md:justify-center lg:flex-row lg:items-center lg:justify-center gap-4 text-sm text-emerald-600 dark:text-emerald-300">
          <div className="flex items-center gap-1 justify-center">
            <Clock className="h-4 w-4" />
            <span>{formatTime(currentTime)}</span>
          </div>
          <span className="hidden lg:block">•</span>
          <span>{formatDate(currentTime)}</span>
        </div>
      </div>

      {/* DAILY INSPIRATION */}
      <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537] border border-emerald-200 dark:border-emerald-700 rounded-xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl text-emerald-800 dark:text-emerald-300">
            <Sparkles className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
            {currentContent
              ? currentContent.type === "ayah"
                ? "Daily Ayah"
                : "Daily Hadith"
              : "Your Daily Inspiration"}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-6 text-center">
          {currentContent ? (
            <>
              <p className="text-2xl font-[Noto_Naskh_Arabic] text-gray-800 dark:text-gray-200 font-medium">
                {currentContent.bookname}
              </p>
              <p className="text-3xl font-[Noto_Naskh_Arabic] leading-loose text-emerald-700 dark:text-emerald-300">
                {currentContent.arabic}
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                {currentContent.translation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-0 font-medium">
                {currentContent.narrated}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                — {currentContent.reference}
              </p>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-300 italic">
              Click below to see your Daily Ayah or Hadith ✨
            </p>
          )}

          <div className="flex justify-center mt-4">
            <Button
              onClick={handleRoshniClick}
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full shadow-md"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Show Inspiration
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* QUICK ACTION CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-[#0a2e28] border border-emerald-200 dark:border-emerald-700 rounded-xl shadow hover:shadow-lg">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">
              Next Prayer
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {nextPrayer}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#322d04] border border-yellow-300 dark:border-yellow-600 rounded-xl shadow hover:shadow-lg">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center mx-auto font-bold">
              🗓
            </div>
            <h3 className="font-semibold text-yellow-700 dark:text-yellow-400">
              Hijri Date
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{hijriDate}</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0a2e28] border border-emerald-200 dark:border-emerald-700 rounded-xl shadow hover:shadow-lg">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold font-serif">
              ق
            </div>
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">
              Today&apos;s Surah
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{todaySurah}</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#322d04] border border-yellow-300 dark:border-yellow-600 rounded-xl shadow hover:shadow-lg">
          <CardContent className="p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-yellow-400 text-white rounded-full flex items-center justify-center mx-auto font-bold">
              ⏱
            </div>
            <h3 className="font-semibold text-yellow-700 dark:text-yellow-400">
              Prayers Today
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{prayersToday}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
