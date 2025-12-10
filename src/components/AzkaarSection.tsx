"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AzkaarSection: React.FC = () => {
  const pdfUrl =
    "/pdfs/The-Authentic-Morning-Evening-Adhkar-Shaykh-Abdul-Aziz-At-Tarefe.pdf";

  return (
    <div className="min-h-screen w-full px-4 py-8 lg:right-72 lg:relative overflow-x-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-100 dark:from-[#0d1f1b] dark:via-[#0a1a17] dark:to-[#0c2a27]">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-3">
          <div className="w-14 h-14 rounded-full bg-emerald-600/10 flex items-center justify-center">
            <BookOpen className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-300 tracking-tight">
          Morning & Evening Adhkar
        </h2>
        <p className="text-muted-foreground arabic text-2xl mt-1">
          أذكار الصباح والمساء
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Based on “The Authentic Morning & Evening Adhkar” — Shaykh Abdul Aziz At-Tarefe
        </p>
      </div>

      {/* PDF Display */}
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden border border-emerald-200 dark:border-emerald-800 shadow-xl rounded-2xl bg-gradient-to-br from-white via-emerald-50/80 to-emerald-100 dark:from-[#102b25] dark:via-[#0d241f] dark:to-[#14332f]">
          <CardContent className="p-2 sm:p-4">
            <div className="relative w-full rounded-lg overflow-hidden">
              <iframe
                src={`${pdfUrl}#view=fitH`}
                className="w-full h-[80vh] md:h-[90vh] rounded-lg border-none"
                title="Morning and Evening Adhkar PDF"
              ></iframe>

              {/* Soft gradient overlay bottom for better visual */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-emerald-50/90 dark:from-[#0c2a27]/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-6">
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-xl flex items-center gap-2 mx-auto shadow-md hover:shadow-lg transition"
              >
                <a href={pdfUrl} download>
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AzkaarSection;
