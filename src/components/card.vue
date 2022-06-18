<template>
  <div style="box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px">
    <img :src="flag" :alt="alt" />
    <div class="wrapper">
      <h3>{{ name }}</h3>
      <div class="details">
        <p><strong>Population:</strong> {{ population.toLocaleString() }}</p>
        <p><strong>Region:</strong> {{ region }}</p>
        <p><strong>Capital:</strong> {{ capital[0] }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: String,
  region: String,
  capital: {
    default: "Capital",
  },
  population: {
    default: "10",
  },
  flag: String,
  alt: {
    default: "DE",
  },
});
</script>

<style lang="scss" scoped>
div {
  display: inline-flex;
  flex-direction: column;
  border-radius: 4px;
  background: var(--element);

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 4px 4px 0 0;
    object-fit: cover;
  }

  .wrapper {
    padding: 1rem;
    gap: 0.8rem;

    h3 {
      color: var(--text);
      font-weight: 800;
      font-size: 1.2rem;
    }

    .details {
      font-size: 1rem;
      color: var(--text);
    }
  }
} 
</style>
