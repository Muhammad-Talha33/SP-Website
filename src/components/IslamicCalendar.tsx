"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

interface HijriDay {
  gregorian: { date: string; weekday: { en: string } };
  hijri: {
    date: string;
    day: string;
    month: { en: string; number: number };
    year: string;
  };
}

interface RawCalendarDay {
  date: {
    hijri: {
      date: string;
      day: string;
      month: { en: string; number: number };
      year: string;
    };
    gregorian: {
      date: string;
      weekday: { en: string };
    };
  };
}


const IslamicCalendar: React.FC = () => {
  const [calendar, setCalendar] = useState<HijriDay[]>([]);
  const [monthName, setMonthName] = useState("");
  const [year, setYear] = useState("");
  const [hijriMonth, setHijriMonth] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔁 Function to load a specific Hijri month & year
  const loadCalendar = async (month?: number, year?: string) => {
    try {
      setLoading(true);

      let targetMonth = month;
      let targetYear = year;

      // ✅ If not provided, get today's Hijri date first
      if (!targetMonth || !targetYear) {
        const todayRes = await fetch("https://api.aladhan.com/v1/gToH");
        const todayData = await todayRes.json();
        targetMonth = todayData.data.hijri.month.number;
        targetYear = todayData.data.hijri.year;
      }

      console.log("Fetching Hijri Calendar for:", targetMonth, targetYear);

      // 🌙 Fetch Hijri calendar for Karachi
      const monthRes = await fetch(
        `https://api.aladhan.com/v1/hijriCalendar?latitude=24.8607&longitude=67.0011&method=1&month=${targetMonth}&year=${targetYear}`
      );
      const monthData = await monthRes.json();

      if (Array.isArray(monthData.data)) {
        const validDays = monthData.data
          .filter((d: RawCalendarDay) => d && d.date && d.date.hijri && d.date.gregorian)
          .map((d: RawCalendarDay) => ({
            hijri: d.date.hijri,
            gregorian: d.date.gregorian,
          }));

        setCalendar(validDays);
        setMonthName(validDays[0].hijri.month.en);
        setYear(validDays[0].hijri.year);
        setHijriMonth(validDays[0].hijri.month.number);
      } else {
        console.error("Unexpected calendar data structure:", monthData);
        setCalendar([]);
      }
    } catch (err) {
      console.error("Failed to load calendar:", err);
      setCalendar([]);
    } finally {
      setLoading(false);
    }
  };

  // 🟢 Load calendar initially
  useEffect(() => {
    loadCalendar();
  }, []);

  // 🔄 Handle month navigation
  const handleNextMonth = () => {
    if (!hijriMonth) return;
    let nextMonth = hijriMonth + 1;
    let newYear = parseInt(year);

    if (nextMonth > 12) {
      nextMonth = 1;
      newYear += 1;
    }

    loadCalendar(nextMonth, newYear.toString());
  };

  const handlePrevMonth = () => {
    if (!hijriMonth) return;
    let prevMonth = hijriMonth - 1;
    let newYear = parseInt(year);

    if (prevMonth < 1) {
      prevMonth = 12;
      newYear -= 1;
    }

    loadCalendar(prevMonth, newYear.toString());
  };

  if (loading) {
    return (
      <div className="space-y-6 text-center lg:right-72 lg:relative top-72 relative lg:top-72">
        <RefreshCw className="h-8 w-8 animate-spin mx-auto text-primary mb-4" />
        <p className="text-muted-foreground">Loading Islamic Calendar...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 py-6 lg:right-72 lg:relative overflow-x-hidden">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-foreground">Islamic Calendar</h2>
        <p className="text-muted-foreground arabic text-lg">التقويم الهجري</p>
        <p className="text-sm text-emerald-600 dark:text-emerald-300 mt-1">
          {monthName} {year} AH
        </p>

        {/* 🔘 Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePrevMonth}
            className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            ← Previous
          </button>
          <button
            onClick={handleNextMonth}
            className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#102b28] dark:via-[#0d2624] dark:to-[#083a34]">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-1 text-center mt-2">
            {calendar.map((day, index) => {
              let hijriDay = Number(day.hijri.day) - 1;

              // ✅ If subtraction gives 0, then use 30 (or 29 depending on the month length)
              if (hijriDay <= 0) {
                // Agar monthData se month length milti hai to usko use karein
                const monthLength = 30; // Default 30 rakho (zyada tar months 29-30 hote hain)
                hijriDay = monthLength;
              }

              return (
                <div
                  key={index}
                  className="border rounded-md p-2 bg-white dark:bg-[#14332f] text-sm hover:shadow-md transition"
                >
                  <span className="text-[10px]">{day.gregorian.weekday.en}</span>
                  <p className="text-foreground font-medium">{hijriDay}</p>
                  <p className="text-xs text-muted-foreground">
                    {day.gregorian.date}
                  </p>
                  {day.gregorian.weekday.en === "Friday" && (
                    <p className="text-[9px] text-emerald-600 font-semibold">
                      Jumu’ah
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default IslamicCalendar;
