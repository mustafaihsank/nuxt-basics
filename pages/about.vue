<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit excepturi
      voluptates exercitationem. Neque et libero velit at, dolore maxime
      numquam.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
// const { data } = await useFetch("/api/ninja?name=Mustafa", {
//   method: "post",
//   body: { age: 27 },
// });

const { data } = await useFetch("/api/currency/GBP");
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
