<template>
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
import Card from "../components/card.vue";
import Container from "../components/container.vue";
import Input from "../components/input.vue";
import Select from "../components/select.vue";
import { onMounted, ref } from "vue";

const countries = ref<any[]>([]);

interface Props {
  type: "name" | "region" | "default";
  value: String;
}

const handleFetchCountries = async (params: Props) => {
  let endpoint = "";

  switch (params.type) {
    case "name":
      if (!params.value) {
        endpoint = "https://restcountries.com/v3.1/all";
      } else {
        endpoint = `https://restcountries.com/v3.1/name/${params.value}`;
      }
      break;
    case "region":
      if (params.value === "hide") {
        endpoint = "https://restcountries.com/v3.1/all";
      } else {
        endpoint = `https://restcountries.com/v3.1/region/${params.value}`;
      }
      break;
    default:
      endpoint = "https://restcountries.com/v3.1/all";
      break;
  }

  countries.value = await fetch(endpoint).then((res) => res.json());
};

onMounted(() => {
  handleFetchCountries({ type: "default", value: "" });
});
</script>
