import { useRef } from 'react';

export default function useDebounce(fn, delay) {
  const timeoutRef = useRef(null);

  function debouncedFunction(...properties) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      fn(...properties);
    }, delay);
  }

  return debouncedFunction;
}
