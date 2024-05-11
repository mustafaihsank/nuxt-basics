<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
}

// Using useFetch to fetch products data from the API
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);

//! Overwritten global metadata
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});

definePageMeta({
  layout: "products",
});
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
