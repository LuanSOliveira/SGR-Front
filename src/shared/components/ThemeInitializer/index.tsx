'use client';

import { useThemeStore } from '@/src/store';
import { useEffect } from 'react';

export default function ThemeInitializer() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return null;
}
