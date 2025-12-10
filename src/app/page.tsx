"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import PrayerTimes from '../components/Times';
import QuranSection from '../components/QSection';
import SahihSection from '../components/SahihSection';
import SMusilmSection from '@/components/SMusilmSection';
import SunahADSection from '@/components/SunahADSection';
import JTirmidhiSection from '@/components/JTirmidhiSection';
import SNasaiSection from '@/components/SNasaiSection'
import SIMajahSection from '@/components/SIMajahSection';
import AzkaarSection from '@/components/AzkaarSection';
import DuaBankSection from '@/components/DuaBankSection';
import IslamicCalendar from '@/components/IslamicCalendar'
import DailyTracker from '@/components/DailyTracker'
import TasbeehCounter from '@/components/TasbeehCounter'
import AsmaulHusna from '@/components/AsmaulHusna'

const Index = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize dark mode from localStorage
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   const isDark = savedTheme === 'dark' || 
  //     (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
  //   setDarkMode(isDark);
  //   document.documentElement.classList.toggle('dark', isDark);
  // }, []);

  // const toggleDarkMode = () => {
  //   const newDarkMode = !darkMode;
  //   setDarkMode(newDarkMode);
  //   localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  //   document.documentElement.classList.toggle('dark', newDarkMode);
  // };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'prayer':
        return <PrayerTimes />;
      case 'quran':
        return <QuranSection />;
      case 'tasbeeh':
        return <TasbeehCounter/>;
      case 'calendar':
        return (
          <IslamicCalendar/>
        );
      case 'azkaar':
        return (
          <AzkaarSection/>
        );
      case 'duas':
        return (
          <DuaBankSection/>
        );
      case 'tracker':
        return (
          <DailyTracker/>
        );
      case 'sahih':
        return(
           <SahihSection/>
        )
      case 'sahih2':
        return(
          <SMusilmSection/>
        )
      case 'sahih3':
        return(
          <SunahADSection/>
        )
      case 'sahih4':
        return(
          <JTirmidhiSection/>
        )
      case 'sahih5':
        return(
          <SNasaiSection/>
        )
      case 'sahih6':
        return(
          <SIMajahSection/>
        )
      case 'names':
        return(
          <AsmaulHusna/>
        )
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537]">
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        <div className="flex-1 md:ml-72">
          <Header
            // darkMode={darkMode}
            // toggleDarkMode={toggleDarkMode}
            toggleSidebar={toggleSidebar}
          />
          
          <main className="p-6">
            <div className="max-w-4xl mx-auto">
              {renderActiveSection()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
