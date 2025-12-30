'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Moon } from 'lucide-react';

const POPUP_DISMISSED_KEY = 'theme-popup-dismissed';

export function ThemeSuggestPopup() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only run on the client
    if (typeof window === 'undefined') return;

    // Check if the theme is resolved and it is light
    if (theme === 'light') {
      const dismissed = sessionStorage.getItem(POPUP_DISMISSED_KEY);
      if (!dismissed) {
        // Show the popup after a short delay
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3000); // 3-second delay
        return () => clearTimeout(timer);
      }
    } else {
        // If theme is not light, ensure popup is closed
        setIsOpen(false);
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme('dark');
    sessionStorage.setItem(POPUP_DISMISSED_KEY, 'true');
    setIsOpen(false);
  };

  const handleLater = () => {
    sessionStorage.setItem(POPUP_DISMISSED_KEY, 'true');
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center">
              <Moon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <AlertDialogTitle className="text-center">Experience the Dark Side</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Prefer a darker interface? Switch to our dark theme for a more comfortable viewing experience in low light.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogCancel onClick={handleLater}>Maybe Later</AlertDialogCancel>
          <AlertDialogAction onClick={handleSwitch}>Switch to Dark</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
