"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { asmaulHusna } from "@/data/asmaulhusna";

const AsmaulHusna: React.FC = () => {
  return (
    <div className="min-h-screen w-full px-4 py-6 md:right-72 md:relative">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground">99 Names of Allah</h2>
        <p className="text-muted-foreground arabic text-xl">أسماء الله الحسنى</p>
      </div>

      <Card className="bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#102b28] dark:via-[#0d2624] dark:to-[#083a34]">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {asmaulHusna.map((name) => (
              <div
                key={name.id}
                className="p-4 rounded-xl bg-white dark:bg-[#14332f] shadow hover:shadow-lg transition text-center border"
              >
                <p className="text-2xl arabic mb-2">{name.arabic}</p>
                <p className="text-sm font-semibold">{name.transliteration}</p>
                <p className="text-xs text-muted-foreground">{name.meaning}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AsmaulHusna;
