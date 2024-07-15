import { useCallback, useMemo, useState } from "react";
import { useGetCoffeeShopsQuery } from "src/services/queries/useGetCoffeeShops";

export const useHomeController = () => {
  const [search, setSearch] = useState("");
  const { data: coffeeShops, refetch, isFetching } = useGetCoffeeShopsQuery();

  const handleTextChange = useCallback((text: string) => {
    setSearch(text);
  }, []);

  const filteredItems = useMemo(() => {
    if (!coffeeShops) {
      return [];
    }
    return coffeeShops.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [coffeeShops, search]);

  return {
    search,
    setSearch,
    coffeeShops,
    refetch,
    isFetching,
    handleTextChange,
    filteredItems,
  };
};
