import { useState, useLayoutEffect } from 'react';
import { LIGHT, DARK, THEME } from 'constants/constants';

const THEME_MEDIA_QUERY = '(prefers-color-scheme: light)';

const useTheme = () => {
  const prefersColorScheme = window.matchMedia(THEME_MEDIA_QUERY).matches
    ? LIGHT
    : DARK;

  const [theme, setTheme] = useState(prefersColorScheme);

  const setMode = (mode) => {
    localStorage.setItem(THEME, mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === LIGHT ? setMode(DARK) : setMode(LIGHT);
  };

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem(THEME);
    localTheme && setTheme(localTheme);
  }, [theme]);

  return [theme, themeToggler];
};

export default useTheme;
