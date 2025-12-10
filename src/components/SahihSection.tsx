"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen} from "lucide-react";

interface Volume {
  number: number;
  title: string;
  pdfPath: string;
}

const SahihBukhariSection: React.FC = () => {
  const volumes: Volume[] = [
    { number: 1, title: "Volume 1", pdfPath: "/pdfs/bukhari-volume1(english).pdf" },
    { number: 2, title: "Volume 2", pdfPath: "/pdfs/bukhari-volume2(english).pdf" },
    { number: 3, title: "Volume 3", pdfPath: "/pdfs/bukhari-volume3(english).pdf" },
    { number: 4, title: "Volume 4", pdfPath: "/pdfs/bukhari-volume4(english).pdf" },
    { number: 5, title: "Volume 5", pdfPath: "/pdfs/bukhari-volume5(english).pdf" },
    { number: 6, title: "Volume 6", pdfPath: "/pdfs/bukhari-volume6(english).pdf" },
    { number: 7, title: "Volume 7", pdfPath: "/pdfs/bukhari-volume7(english).pdf" },
    { number: 8, title: "Volume 8", pdfPath: "/pdfs/bukhari-volume8(english).pdf" },
    { number: 9, title: "Volume 9", pdfPath: "/pdfs/bukhari-volume9(english).pdf" },
  ];

  const openPDF = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="min-h-screen w-full px-4 py-6 lg:right-72 lg:relative overflow-x-hidden">
      {/* Header */}
      <div className="text-left md:text-left mb-6">
        <h2 className="text-3xl font-bold text-foreground">Sahih Bukhari</h2>
        <p className="text-muted-foreground arabic text-lg">صحيح البخاري</p>
      </div>

      {/* Volumes List */}
      <div className="flex flex-col gap-4 max-w-3xl mx-auto">
        {volumes.map((volume) => (
          <Card
            key={volume.number}
            className="cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]"
          >
            <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center dark:text-white font-bold shrink-0">
                  {volume.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{volume.title}</h3>
                  <p className="text-sm text-muted-foreground">Sahih Bukhari Collection</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                <Button
                  onClick={() => openPDF(volume.pdfPath)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 py-2 text-sm w-full sm:w-auto"
                >
                  Open Full Volume
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Volume Found */}
      {volumes.length === 0 && (
        <Card className="mt-10 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]">
          <CardContent className="p-12 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Volumes Found</h3>
            <p className="text-muted-foreground">Please upload your PDF files.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SahihBukhariSection;
