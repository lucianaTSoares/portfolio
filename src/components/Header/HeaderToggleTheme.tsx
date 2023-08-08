import { useScroll } from '@/hooks/useScroll';
import { useTheme } from '@/hooks/useTheme';
import { TbMoon, TbMoonOff } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';

interface HeaderToggleThemeProps {
  darkIconsSize?: number;
  lightIconsSize?: number;
}

export function HeaderToggleTheme({
  darkIconsSize = 22,
  lightIconsSize = 22,
}: HeaderToggleThemeProps) {
  const { darkTheme, setIsDarkTheme } = useTheme();
  const { pageWasScrolled } = useScroll(10);

  return (
    <button
      className={twMerge(
        'rounded-full bg-zinc-200 p-2 transition hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700',
        pageWasScrolled && 'bg-opacity-30 hover:bg-opacity-60'
      )}
      onClick={() => setIsDarkTheme((prev) => !prev)}
    >
      {darkTheme ? (
        <TbMoonOff size={darkIconsSize} />
      ) : (
        <TbMoon
          size={lightIconsSize}
          className={twMerge(pageWasScrolled && 'text-light')}
        />
      )}
    </button>
  );
}
