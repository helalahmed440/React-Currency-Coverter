import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setData(json);
      };
      fetchData();
    } catch (err) {
      throw new Error("Data loading failed");
    } finally {
      setIsPending(false);
    }
  }, [url]);

  return { data, isPending };
};

export default useFetch;
