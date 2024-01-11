import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import { DataResponse } from "../services/http-service";

interface UseDataConfigObject<T> {
  dataFetcher: () => DataResponse<T>;
}

/**
 * This hook can be used to fetch data by passing in a dataFetcher function
 *
 * ** While passing in the dataFetcher, pass the binded function **
 *
 * @param {UseDataConfigObject} useDataConfigObject Data config object for the fetcher
 * @returns
 */
const useData = <T>({ dataFetcher: getData }: UseDataConfigObject<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = getData();
    setIsLoading(true);
    request
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  return { data, error, isLoading };
};

export default useData;
