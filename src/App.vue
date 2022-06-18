<template>
  <Header></Header>
  <Container class="mainWrapper">
    <Container class="actionsWrapper">
      <Input @search="handleFetchCountries($event)" />
      <Select @select="handleFetchCountries($event)" />
    </Container>
    <Container class="cardWrapper">
      <div v-for="country in countries">
        <Card
          :flag="country.flags.svg"
          :name="country.name.common"
          :region="country.region"
          :capital="country.capital"
          :population="country.population"
          :alt="country.name.common"
        />
      </div>
    </Container>
  </Container>
</template>

<script lang="ts" setup>
import Header from "./components/header.vue";
import Card from "./components/card.vue";
import Container from "./components/container.vue";
import Input from "./components/input.vue";
import Select from "./components/select.vue";
import { onMounted, ref } from "vue";

const countries = ref<any[]>([]);

interface Props {
  type: 'name' | 'region' | 'default',
  value: String
}

const handleFetchCountries = async (params: Props) => {
  let endpoint = "";

  switch (params.type) {
    case 'name':
      if (!params.value) {
        endpoint = "https://restcountries.com/v3.1/all";
      } else {
        endpoint = `https://restcountries.com/v3.1/name/${params.value}`;
      }
    break;
    case 'region':
      if (params.value === 'hide') {
        endpoint = "https://restcountries.com/v3.1/all";
      } else {
        endpoint = `https://restcountries.com/v3.1/region/${params.value}`
      }
    break;
    default:
      endpoint = "https://restcountries.com/v3.1/all";
    break;
  }

  countries.value = await fetch(endpoint).then((res) => res.json());
};

onMounted(() => {
  handleFetchCountries({ type: 'default', value: '' });
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", sans-serif;
}

body {
  background: var(--background);
  height: 100vh;
}

:root {
  --background: hsl(0, 0%, 98%);
  --input: hsl(0, 0%, 52%);
  --element: hsl(0, 0%, 100%);
  --text: hsl(200, 15%, 8%);
}

:root.dark-theme {
  --background: hsl(207, 26%, 17%);
  --input: hsl(209, 23%, 22%);
  --element: hsl(209, 23%, 22%);
  --text: hsl(0, 0%, 100%);
}

.mainWrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
}

.cardWrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 2rem;
}

.actionsWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
