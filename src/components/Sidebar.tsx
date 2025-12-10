import React from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Calendar,
  Heart,
  Home,
  CheckSquare,
  X,
  CircleDot,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home, arabic: "گھر" },
  {
    id: "quran",
    label: "Surahs of the Quran",
    icon: BookOpen,
    arabic: "سور القرآن الكريم",
  },
  {
    id: "names",
    label: "99 Names of Allah",
    icon: BookOpen,
    arabic: "أسماء الله الحسنى",
  },
  {
    id: "sahih",
    label: "Sahih Bukhari",
    icon: BookOpen,
    arabic: "صحيح البخاري",
  },
  { id: "sahih2", label: "Sahih Muslim", icon: BookOpen, arabic: "صحيح مسلم" },
  {
    id: "sahih3",
    label: "Sunah Abu Dawood",
    icon: BookOpen,
    arabic: "سنن أبي داود",
  },
  {
    id: "sahih4",
    label: "Jami‘ al-Tirmidhi",
    icon: BookOpen,
    arabic: "جامع الترمذي",
  },
  {
    id: "sahih5",
    label: "Sunan al-Nasa’i",
    icon: BookOpen,
    arabic: "سنن النسائي",
  },
  {
    id: "sahih6",
    label: "Sunan Ibn Majah",
    icon: BookOpen,
    arabic: "سنن ابن ماجه",
  },
  {
    id: "prayer",
    label: "Namaz Timings",
    icon: Clock,
    arabic: "نماز کے اوقات",
  },
  {
    id: "calendar",
    label: "Islamic Calendar",
    icon: Calendar,
    arabic: "اسلامی کیلنڈر",
  },
  { id: "azkaar", label: "Azkaar", icon: Heart, arabic: "اذکار" },
  { id: "duas", label: "Dua Bank", icon: BookOpen, arabic: "دعاؤں کا خزانہ" },
  {
    id: "tasbeeh",
    label: "Tasbeeh Counter",
    icon: CircleDot,
    arabic: "عداد التسبيح",
  },
  {
    id: "tracker",
    label: "Daily Tracker",
    icon: CheckSquare,
    arabic: "روزانہ ٹریکر",
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  closeSidebar,
  activeSection,
  setActiveSection,
}) => {

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    closeSidebar();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
  <aside
  className={`
    fixed top-0 left-0 z-50 
    h-screen w-72 bg-card border-r border-border
    overflow-y-auto
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:static md:z-auto
  `}
>

        <div className="flex flex-col  bg-linear-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg items-center justify-center hidden md:bflex">
              </div>
              <div>
                <h2 className="font-semibold text-foreground">
                  Deen Companion
                </h2>
                <p className="text-xs text-muted-foreground arabic">
                  رفيق الدين
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeSidebar}
              className="md:hidden"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`
                  w-full justify-start gap-3 h-12
                  ${
                    activeSection === item.id
                      ? "bg-green-900 dark:bg-emerald-400 shadow-soft"
                      : "hover:bg-gray-200 dark:hover:bg-emerald-700 text-foreground"
                  }
                `}
                onClick={() => handleNavigation(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <div className="flex-1 text-left">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs opacity-70 arabic">{item.arabic}</div>
                </div>
              </Button>
            ))}
          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
