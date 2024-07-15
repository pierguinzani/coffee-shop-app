import { useQuery } from "@tanstack/react-query";
import { getCoffeeShopsClient } from "../client";

const useGetCoffeeShopsQueryKey = "useGetCoffeeShopsQueryKey";

export function useGetCoffeeShopsQuery() {
  return useQuery({
    queryKey: [useGetCoffeeShopsQueryKey],
    queryFn: getCoffeeShopsClient,
  });
}
