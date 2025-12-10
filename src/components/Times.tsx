"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, RefreshCw } from "lucide-react";

interface PrayerTime {
  name: string;
  arabic: string;
  time: string;
  passed: boolean;
  current: boolean;
}

interface Location {
  city: string;
  country: string;
}

const PrayerTimes: React.FC = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [location, setLocation] = useState<Location>({
    city: "Karachi",
    country: "Pakistan",
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // ✅ Function to fetch prayer times dynamically
  const fetchPrayerTimes = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress?address=${location.city},${location.country}&method=1&school=1`
      );
      const data = await res.json();

      if (data.code === 200) {
        const timings = data.data.timings;
        const formattedTimes: PrayerTime[] = [
          {
            name: "Fajr",
            arabic: "فجر",
            time: timings.Fajr,
            passed: false,
            current: false,
          },
          {
            name: "Sunrise",
            arabic: "طلوع آفتاب",
            time: timings.Sunrise,
            passed: false,
            current: false,
          },
          {
            name: "Dhuhr",
            arabic: "ظہر",
            time: timings.Dhuhr,
            passed: false,
            current: false,
          },
          {
            name: "Asr",
            arabic: "عصر",
            time: timings.Asr,
            passed: false,
            current: false,
          },
          {
            name: "Maghrib",
            arabic: "مغرب",
            time: timings.Maghrib,
            passed: false,
            current: false,
          },
          {
            name: "Isha",
            arabic: "عشاء",
            time: timings.Isha,
            passed: false,
            current: false,
          },
        ];

        // ✅ Mark current and passed prayers dynamically
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;

        let currentIndex = -1;
        formattedTimes.forEach((p, i) => {
          if (currentTime > p.time) {
            p.passed = true;
          } else if (currentIndex === -1) {
            currentIndex = i;
          }
        });

        if (currentIndex >= 0) formattedTimes[currentIndex].current = true;

        setPrayerTimes(formattedTimes);
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load on mount
  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  const handleRefresh = () => {
    fetchPrayerTimes();
  };

  const getNextPrayer = () => {
    const currentPrayer = prayerTimes.find((p) => p.current);
    if (currentPrayer) return currentPrayer;
    const nextPrayer = prayerTimes.find((p) => !p.passed);
    return nextPrayer || prayerTimes[0];
  };

  const nextPrayer = getNextPrayer();

  if (loading) {
    return (
      <div className="space-y-6 text-center lg:right-72 lg:relative top-72 relative lg:top-72">
        <RefreshCw className="h-8 w-8 animate-spin mx-auto text-primary mb-4" />
        <p className="text-muted-foreground">Loading prayer times...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 light:bg-[#fdfaf6] min-h-screen p-4 transition-colors duration-500 lg:right-72 lg:relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Prayer Times</h2>
          <p className="text-muted-foreground arabic">اوقات نماز</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRefresh}
          disabled={loading}
        >
          <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
        </Button>
      </div>

      {/* Location Info */}
      <Card className="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-emerald-900  shadow-md border border-emerald-200 dark:border-emerald-700">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold text-lg">
                {location.city}, {location.country}
              </h3>
              <p className="text-sm text-muted-foreground">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            </div>
          </div>
          {nextPrayer && (
            <div className="text-right">
              {nextPrayer.name.toLowerCase() === "sunrise"
                ? "Next"
                : "Next Prayer"}{" "}
              <p className="font-semibold text-primary">
                {nextPrayer.name} at {nextPrayer.time}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Prayer Times List */}
      <div className="grid gap-4">
        {prayerTimes.map((prayer) => (
          <Card
            key={prayer.name}
            className={`transition-all bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537] ${
              prayer.current
                ? "ring-2 ring-primary bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537] text-white"
                : prayer.passed
                ? "opacity-60 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]"
                : ""
            }`}
          >
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    prayer.current ? "bg-primary/10" : "bg-primary/10"
                  }`}
                >
                  <span
                    className={`font-bold arabic text-lg ${
                      prayer.current ? "text-foreground" : "text-primary"
                    }`}
                  >
                    {prayer.arabic.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      prayer.current ? "text-foreground" : "text-foreground"
                    }`}
                  >
                    {prayer.name}
                  </h3>
                  <p
                    className={`arabic text-sm ${
                      prayer.current
                        ? "text-muted-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {prayer.arabic}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-2xl font-bold ${
                    prayer.current ? "text-foreground" : "text-foreground"
                  }`}
                >
                  {prayer.time}
                </p>
                {prayer.current && (
                  <p className="text-sm text-foreground">Current</p>
                )}
                {prayer.passed && !prayer.current && (
                  <p className="text-sm text-muted-foreground">Completed</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Method Info */}
      <Card>
        <CardContent className="p-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Calculation Method</span>
          <span className="font-medium">University of Islamic Sciences, Karachi</span>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrayerTimes;
