<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
}

const route = useRoute();
const id = route.params.id;

// Using useFetch to fetch products data from the API
const { data: product } = await useFetch<Product>(
  `https://fakestoreapi.com/products/${id}`,
  { key: id as string }
);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped></style>
