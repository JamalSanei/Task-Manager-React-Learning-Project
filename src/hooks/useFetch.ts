// src/hooks/useFetch.ts
import { useEffect, useReducer } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type Action<T> =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: T }
  | { type: "ERROR"; payload: string };

function reducer<T>(state: FetchState<T>, action: Action<T>): FetchState<T> {
  switch (action.type) {
    case "LOADING":
      return { data: null, loading: true, error: null };
    case "SUCCESS":
      return { data: action.payload, loading: false, error: null };
    case "ERROR":
      return { data: null, loading: false, error: action.payload };
  }
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, dispatch] = useReducer(reducer<T>, {
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "LOADING" });

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error in fetch data...");
        return res.json();
      })
      .then((data) => dispatch({ type: "SUCCESS", payload: data }))
      .catch((err) => dispatch({ type: "ERROR", payload: err }));
  }, [url]);

  return state;
}
