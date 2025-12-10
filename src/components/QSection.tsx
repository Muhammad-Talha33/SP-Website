"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, ChevronRight } from "lucide-react";

interface Surah {
  number: number;
  englishName: string;
  englishNameTranslation: string;
  name: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Ayah {
  number: number;
  text: string;
  translation: string;
}

interface ArabicAyah {
  numberInSurah: number;
  text: string;
}


const QuranSection: React.FC = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllSurahs = async () => {
      try {
        const res = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await res.json();
        setSurahs(data.data);
      } catch (error) {
        console.error("Failed to fetch surahs:", error);
      }
    };
    fetchAllSurahs();
  }, []);

  const filteredSurahs = surahs.filter(
    (surah) =>
      surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      surah.name.includes(searchQuery)
  );

  const loadFullSurah = async (surahNumber: number) => {
    setLoading(true);
    try {
      const resArabic = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
      const resEnglish = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`);
      const dataArabic = await resArabic.json();
      const dataEnglish = await resEnglish.json();

      const mergedAyahs = dataArabic.data.ayahs.map((a: ArabicAyah, i: number) => ({
        number: a.numberInSurah,
        text: a.text,
        translation: dataEnglish.data.ayahs[i]?.text || "",
      }));

      setAyahs(mergedAyahs);
    } catch (error) {
      console.error("Failed to load full surah:", error);
    } finally {
      setLoading(false);
    }
  };

  if (selectedSurah) {
    return (
      <div className="space-y-6 light:bg-[#fdfaf6] min-h-screen p-4 transition-colors duration-500 lg:right-72 lg:relative">
        <Button variant="ghost" onClick={() => setSelectedSurah(null)} className="-ml-4">
          ← Back to Surahs
        </Button>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {selectedSurah.englishName}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground arabic">
            {selectedSurah.name}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            {selectedSurah.numberOfAyahs} verses • {selectedSurah.revelationType}
          </p>
        </div>

        {!ayahs.length ? (
          <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537] text-center p-6">
            <CardContent>
              <BookOpen className="h-14 sm:h-16 w-14 sm:w-16 text-primary mx-auto mb-4" />
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Click below to load the full Surah with translation.
              </p>
              <Button
                onClick={() => loadFullSurah(selectedSurah.number)}
                disabled={loading}
                className="w-full sm:w-auto"
              >
                {loading ? "Loading..." : "Load Full Surah"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {ayahs.map((ayah) => (
              <Card
                key={ayah.number}
                className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]"
              >
                <CardContent className="p-3 sm:p-4">
                  <p className="text-right text-xl sm:text-2xl arabic mb-2 leading-relaxed">
                    {ayah.text}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">{ayah.translation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 light:bg-[#fdfaf6] min-h-screen p-4 transition-colors duration-500 lg:right-72 lg:relative">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Surahs of the Quran</h2>
        <p className="text-muted-foreground arabic text-base sm:text-lg">سور القرآن الكريم</p>
      </div>

      <Card className="prayer-card bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
            <Input
              placeholder="Search Surahs by name or Arabic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-10 h-10 sm:h-12 text-base sm:text-lg"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {[
          { count: "114", label: "Surahs" },
          { count: "6,236", label: "Verses" },
          { count: "86", label: "Meccan" },
          { count: "28", label: "Medinan" },
        ].map((item, idx) => (
          <Card
            key={idx}
            className={`text-center border ${
              idx % 2 === 0
                ? "bg-white dark:bg-[#0a2e28] border-emerald-200 dark:border-emerald-700 text-xl sm:text-2xl text-emerald-800 dark:text-emerald-300"
                : "bg-white dark:bg-[#322d04] border-yellow-300 dark:border-yellow-600 text-xl sm:text-2xl text-yellow-700 dark:text-yellow-400"
            }`}
          >
            <CardContent className="p-3 sm:p-4">
              <div className="font-bold">
                {item.count}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        {filteredSurahs.map((surah) => (
          <Card
            key={surah.number}
            className="cursor-pointer hover:scale-[1.02] hover:shadow-elegant transition-transform bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]"
            onClick={() => {
              setSelectedSurah(surah);
              setAyahs([]);
            }}
          >
            <CardContent className="p-3 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-sm sm:text-base dark:text-white font-bold shrink-0">
                  {surah.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {surah.englishName}
                  </h3>
                  <p className="text-base sm:text-lg arabic text-primary">{surah.name}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-4">
                <div className="text-right text-xs sm:text-sm">
                  <p className="text-muted-foreground">{surah.numberOfAyahs} verses</p>
                  <p className="text-gray-500 font-medium">{surah.revelationType}</p>
                </div>
                <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSurahs.length === 0 && (
        <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]">
          <CardContent className="p-10 sm:p-12 text-center">
            <BookOpen className="h-14 sm:h-16 w-14 sm:w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No Surahs Found</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Try another name.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuranSection;