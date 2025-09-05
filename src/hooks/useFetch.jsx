import { useState, useEffect } from 'react';
import { API_KEY } from '../App';

export const useFetch = (url) => {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [url]);

  return data;
};
