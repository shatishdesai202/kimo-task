import React, { useState, useEffect } from "react";

const BASE_URL = "https://web-dev.dev.kimo.ai/v1";

export const useGetQuery = (query: string) => {
  const [data, setData] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let cachedData = localStorage.getItem(query);

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch(BASE_URL + query);
          const json = await response.json();

          setData(json);
          setLoading(false);

          localStorage.setItem(query, JSON.stringify(json));
        }
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};
