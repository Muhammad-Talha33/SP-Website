"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const TasbeehCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);

  // 🔄 Load saved values
  useEffect(() => {
    const savedCount = localStorage.getItem("tasbeeh-count");
    const savedTarget = localStorage.getItem("tasbeeh-target");

    if (savedCount) setCount(Number(savedCount));
    if (savedTarget) setTarget(Number(savedTarget));
  }, []);

  // 💾 Save on change
  useEffect(() => {
    localStorage.setItem("tasbeeh-count", String(count));
    localStorage.setItem("tasbeeh-target", String(target));
  }, [count, target]);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen px-4 py-7 lg:right-72 lg:relative max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Tasbeeh Counter</h2>
        <p className="text-muted-foreground arabic text-lg">عداد التسبيح</p>
      </div>

      <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#0f2b28] dark:via-[#0c2725] dark:to-[#0b3c36] rounded-2xl">
        <CardContent className="flex flex-col items-center gap-6 p-8">

          {/* Count Display */}
          <div className="flex flex-col items-center">
            <p className="text-6xl font-bold text-emerald-700 dark:text-emerald-300 drop-shadow-sm">
              {count}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Target: {target}
            </p>
          </div>

          {/* Increment Button */}
          <button
            onClick={increment}
            className="w-40 h-40 rounded-full bg-emerald-600 active:scale-95 transition-all shadow-lg hover:bg-emerald-700 text-white text-2xl font-semibold flex items-center justify-center"
          >
            +1
          </button>

          {/* Target Change */}
          <div className="w-full">
            <label className="text-sm font-medium">Set Target</label>
            <input
              type="number"
              className="w-full mt-1 p-2 rounded-md border bg-white dark:bg-[#14332f]"
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
              placeholder="e.g., 33, 100, 300"
            />
          </div>

          {/* Controls */}
          <div className="flex justify-between gap-4 w-full mt-3">
            <button
              onClick={reset}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium"
            >
              Reset
            </button>

            <button
              onClick={() => setCount(target)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
            >
              Complete
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TasbeehCounter;
