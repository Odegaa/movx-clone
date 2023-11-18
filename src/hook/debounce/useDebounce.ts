import React from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay || 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
}
