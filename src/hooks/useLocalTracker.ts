"use client";

import { useState, useEffect } from "react";

export function useLocalTracker<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  // ✅ Auto Reset Daily
  useEffect(() => {
    const checkReset = async () => {
      // Fetch today's Hijri date (simplest reliable method)
      const res = await fetch("https://api.aladhan.com/v1/gToH");
      const data = await res.json();
      const todayHijri = `${data.data.hijri.day}-${data.data.hijri.month.number}-${data.data.hijri.year}`;

      const storedDate = localStorage.getItem(`${key}-date`);

      // If date changed → Reset tracker
      if (storedDate && storedDate !== todayHijri) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        setValue(defaultValue);
      }

      // Save the latest date after ensuring reset logic runs
      localStorage.setItem(`${key}-date`, todayHijri);
    };

    checkReset();
  }, [key, defaultValue]);

  // ✅ Store changes normally
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  return [value, setValue] as const;
}
