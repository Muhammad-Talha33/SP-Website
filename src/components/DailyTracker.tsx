"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalTracker } from "@/hooks/useLocalTracker";

type PrayerName = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";
const prayers: PrayerName[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

const DailyTracker: React.FC = () => {
  const [data, setData] = useLocalTracker("daily-tracker", {
    prayers: {
      Fajr: false,
      Dhuhr: false,
      Asr: false,
      Maghrib: false,
      Isha: false,
    } as Record<PrayerName, boolean>,
    tasks: [] as Task[],
  });

  const [newTask, setNewTask] = useState("");

  const togglePrayer = (name: PrayerName) => {
    setData({
      ...data,
      prayers: { ...data.prayers, [name]: !data.prayers[name] },
    });
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    const newItem: Task = {
      id: crypto.randomUUID(),
      text: newTask.trim(),
      completed: false,
    };

    setData({ ...data, tasks: [...data.tasks, newItem] });
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    const updated = data.tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setData({ ...data, tasks: updated });
  };

  const deleteTask = (id: string) => {
    setData({ ...data, tasks: data.tasks.filter((t) => t.id !== id) });
  };

  const clearAll = () => {
    localStorage.removeItem("daily-tracker");
    localStorage.removeItem("daily-tracker-date");

    setData({
      prayers: {
        Fajr: false,
        Dhuhr: false,
        Asr: false,
        Maghrib: false,
        Isha: false,
      },
      tasks: [],
    });
  };

  return (
    <div className="min-h-screen px-4 py-6 max-w-xl mx-aut md:right-72 md:relative">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Daily Worship Tracker</h2>
        <p className="text-muted-foreground arabic text-lg">
          متابعة الأعمال اليومية
        </p>
      </div>

      <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#102b28] dark:via-[#0d2624] dark:to-[#083a34] shadow-sm">
        <CardContent className="space-y-6 p-4 md:p-6">

          {/* Prayers */}
          <div>
            <h3 className="font-semibold mb-2">Prayers</h3>

            {/* MOBILE: 2 rows | TABLET: 3 cols | DESKTOP: 5 cols */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5  gap-3 text-center">
              {prayers.map((p) => (
                <button
                  key={p}
                  onClick={() => togglePrayer(p)}
                  className={`rounded-lg p-2 border text-[12px] sm:text-sm transition ${
                    data.prayers[p]
                      ? "bg-emerald-600 text-white border-emerald-700"
                      : "bg-white dark:bg-[#14332f]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div>
            <h3 className="font-semibold mb-2">My Daily Tasks</h3>

            {/* Add task input */}
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <input
                className="flex-1 p-2 rounded-md border bg-white dark:bg-[#14332f]"
                placeholder="Add a new task (Quran, Dhikr, Charity...)"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                onClick={addTask}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Add
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-3">
              {data.tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-2 rounded-md border bg-white dark:bg-[#14332f]"
                >
                  <div
                    className={`cursor-pointer ${
                      task.completed ? "line-through text-muted-foreground" : ""
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.text}
                  </div>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 font-bold text-sm px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Button */}
          <div className="mt-6 text-center">
            <button
              onClick={clearAll}
              className="bg-red-600 text-white p-3 rounded-lg font-medium transition hover:bg-red-700"
            >
              Clear All
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyTracker;
