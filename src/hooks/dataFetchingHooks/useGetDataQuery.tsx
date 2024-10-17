import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKeys";
import axios from "axios";
import { useAppContext } from "src/application/App.context";
import { IPage } from "src/interfaces/Interfaces";

export function useGetDataQuery() {
  const { currentPage } = useAppContext();
  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: [QUERY_KEY.GALLRY, currentPage],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/page${currentPage}.json`)
        .then((response: { data: IPage }) => response.data),
  });
  return { isLoading, isSuccess, error, data };
}
