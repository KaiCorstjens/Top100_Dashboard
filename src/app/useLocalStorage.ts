import { useState, useEffect, Dispatch, SetStateAction } from "react";

function getStorageValue<S>(key: string, defaultValue: S): S {
  // getting stored value
  const saved = localStorage.getItem(key);
  return saved ? (JSON.parse(saved) as S) : defaultValue;
}

export const useLocalStorage = <S>(
  key: string,
  defaultValue: S
): [S, Dispatch<SetStateAction<S>>] => {
  const [value, setValue] = useState(() => {
    return getStorageValue<S>(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export function useLocStorage<S>(key: string, defaultValue: S) {
  const [value, setValue] = useState(() => {
    return getStorageValue<S>(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
