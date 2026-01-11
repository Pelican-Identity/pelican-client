import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLongDayTime = (input: string | Date) => {
  const d = new Date(input);

  return d.toLocaleString("en-US", {
    weekday: "short", // Tue
    month: "short", // May
    year: "numeric", // 2026
    day: "numeric", // 6
    hour: "numeric", // 12
    minute: "2-digit", // 30
    hour12: true, // AM / PM
  });
};

export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
