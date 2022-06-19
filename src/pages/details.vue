<template>
  <Container class="container">
    <div>
      <img class="flag" :src="countries?.flags.svg" alt="DE">
    </div>
    <div class="wrapper">
      <h1>{{ countries?.name.common }}</h1>
      <div class="detailsWrapper">
        <div>
          <p><strong>Native Name:</strong> {{ countries?.name.official }}</p>
          <p><strong>Population:</strong> {{ countries?.population.toLocaleString() }}</p>
          <p><strong>Region:</strong> {{ countries?.region }}</p>
          <p><strong>Sub Region:</strong> {{ countries?.subregion }}</p>
          <p><strong>Capital:</strong> {{ countries?.capital[0] }}</p>
        </div>
        <div>
          <p><strong>Top Level Domain:</strong> {{ countries?.tld[0] }}</p>
          <p><strong>Currency:</strong> {{ currencyName }}</p>
          <p><strong>Languages:</strong> {{ languages }}</p>
        </div>
      </div>
      <div>
        <p class="buttonWrapper"><strong>Border Countries:</strong>
          <div>
            <a :href="$router.resolve({ name: 'Details', params: { name: country } }).href" v-for="(country, index) in borderCountry" class="button" :key="index">
              {{ country }}
            </a>
          </div>
        </p>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Container from '../components/container.vue';

interface Props {
  name: {
    common: string,
    official: string
  },
  flags: {
    svg: string
  },
  population: number,
  region: string,
  subregion: string,
  capital: Array<string>,
  tld: Array<string>,
  currencies: any,
  languages: any,
  borders: Array<string>
}

const route = useRoute()
const countries = ref<Props>();
const currencyName = ref()
const languages = ref()
const borderCountry = ref()

const handleFetchCountry = async () => {
  countries.value = await fetch(`https://restcountries.com/v3.1/name/${route.params.name}`)
    .then(res => res.json())
    .then(res => res[0])
};

onMounted(async () => {
  await handleFetchCountry()

  const currency: any = Object.keys(countries.value?.currencies)[0]

  currencyName.value = currency

  languages.value = Object.values(countries.value?.languages).join(', ')

  borderCountry.value = countries.value?.borders.splice(0, 3)
})
</script>

<style lang="scss" scoped>
.buttonWrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: .4rem;
  }
}

.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
  color: var(--text);

  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.button {
  cursor: pointer;
  display: inline-flex;
  background: var(--element);
  padding: .4rem 2rem;
  border-radius: .25rem;
  color: var(--text);
  font-weight: 600;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 2px;
  text-decoration: none;
}

.flag {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  .detailsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>