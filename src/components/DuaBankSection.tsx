"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { BookOpen, Info, ChevronDown } from "lucide-react";
import { duas } from "../data/duaBankData";

export const categories = [
  "All",
  "Forgiveness",
  "Rizq",
  "Anxiety",
  "Patience",
  "Protection",
  "Parents",
  "Travel",
  "Gratitude",
  "Sleep",
  "Morning",
  "Evening",
  "Illness",
  "Rain",
  "Fear",
  "General",
  "Waking Up"
];

const DuaBankSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDuas =
    selectedCategory === "All"
      ? duas
      : duas.filter((dua) => dua.category === selectedCategory);

  return (
    <div className="min-h-screen w-full px-4 py-6 lg:right-72 lg:relative overflow-x-hidden">
      {/* Header */}
      <div className="text-left mb-6">
        <h2 className="text-3xl font-bold text-foreground">Dua Bank</h2>
        <p className="text-muted-foreground arabic text-lg">بنك الأدعية</p>
        <p className="text-muted-foreground mt-1">
          Authentic Qur’anic & Prophetic Duas categorized for daily life.
        </p>
      </div>

      {/* Unified Dropdown for All Screen Sizes */}
      <div className="mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full sm:w-72 justify-between"
            >
              {selectedCategory}
              <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="max-h-64 overflow-y-auto w-full sm:w-72">
            {categories.map((cat) => (
              <DropdownMenuItem
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-100 text-emerald-800 font-semibold"
                    : ""
                }`}
              >
                {cat}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Dua Cards */}
      {filteredDuas.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
          {filteredDuas.map((dua) => (
            <Card
              key={dua.id}
              className="transition-transform hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#12332d] dark:via-[#0c2a27] dark:to-[#064537]"
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {dua.category}
                  </h3>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>

                <p className="text-right text-2xl arabic">{dua.arabic}</p>
                <p className="text-muted-foreground">{dua.translation}</p>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  {dua.repeat && <span>Repeat: {dua.repeat}x</span>}
                  {dua.reference && <span>📖 {dua.reference}</span>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="mt-10 bg-gradient-to-br from-white via-emerald-50 to-emerald-100">
          <CardContent className="p-12 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Duas Found</h3>
            <p className="text-muted-foreground">Try another category.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DuaBankSection;
