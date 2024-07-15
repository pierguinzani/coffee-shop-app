import React from "react";
import { Box, HStack, Input, Text, VStack } from "native-base";
import Button from "@components/Button";
import SearchIcon from "../../assets/icons/search.svg";
import ProductList from "@components/ProductList";
import { useHomeController } from "src/controllers/Home";
import { colors, metrics } from "src/theme";

export default function Home() {
  const { search, refetch, isFetching, handleTextChange, filteredItems } =
    useHomeController();

  return (
    <Box
      safeArea
      flex={1}
      padding={metrics.baseHorizontalPadding}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
      >
        <Text fontSize="4xl" fontWeight="medium" color={colors.primary} mb={8}>
          Coffee Page
        </Text>
        <HStack w="100%" h={16} alignItems="center" mb={2} space={4}>
          <Input
            flex={1}
            h={12}
            bg={colors.secondary}
            placeholder="Search items"
            placeholderTextColor={colors.tertiary}
            value={search}
            onChangeText={handleTextChange}
            borderRadius={50}
            px={4}
            borderColor={"transparent"}
          />
          <Box>
            <SearchIcon width={30} height={30} />
          </Box>
        </HStack>
        <ProductList items={filteredItems} />
        <Button title="Refresh" onPress={refetch} isLoading={isFetching} />
      </VStack>
    </Box>
  );
}
