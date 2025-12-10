import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-[#14332f] dark:via-[#0c2a27] dark:to-[#064537] md:right-72 md:relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
       
            <div>
              <h1 className="text-xl font-semibold text-foreground">Deen Companion</h1>
              <p className="text-xs text-muted-foreground">رفيق الدين</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;