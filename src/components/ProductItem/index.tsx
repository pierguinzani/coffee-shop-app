import { HStack, Image, Text, VStack } from "native-base";
import { colors } from "src/theme";
import { ProductItemProps } from "src/types/ProductItemProps";

export const ProductItem = ({ item }: { item: ProductItemProps }) => (
  <HStack
    key={item.id}
    space={5}
    alignItems="center"
    mb={4}
    w="100%"
    height={100}
  >
    <Image
      source={{ uri: item.image }}
      alt={item.title}
      size="lg"
      borderRadius={16}
      resizeMode="cover"
      width={32}
      height={24}
    />
    <VStack flex={1} h="100%" justifyContent="center">
      <Text fontSize="md" fontWeight="medium" color={colors.primary}>
        {item.title}
      </Text>
      <Text
        fontSize="md"
        fontWeight="medium"
        color={colors.tertiary}
        noOfLines={3}
      >
        {item.description}
      </Text>
    </VStack>
  </HStack>
);
