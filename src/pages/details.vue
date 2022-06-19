<template>
  <Container style="margin-bottom: 2rem;">
    <router-link to="/" class="backButton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>
      <p>Back</p>
    </router-link>
  </Container>
  <Container class="mainWrapper">
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
          <p><strong>Capital:</strong> {{ countries?.capital ? countries?.capital[0] : '' }}</p>
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
            <div v-for="(country, index) in borderCountry" class="button" :key="index">
              {{ country }}
            </div>
          </div>
        </p>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
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
const router = useRouter()
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
  try {
    await handleFetchCountry()

    const currency: any = Object.keys(countries.value?.currencies)[0]

    currencyName.value = currency

    languages.value = Object.values(countries.value?.languages).join(', ')

    borderCountry.value = countries.value?.borders.splice(0, 3)
  } catch (error) {
    router.push({ name: 'Home' })
  }
})
</script>

<style lang="scss" scoped>
.backButton {
  background: var(--element);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: .6rem 2rem;
  gap: .4rem;
  border: none;
  cursor: pointer;
  border-radius: .25rem;
  margin-top: 2rem;

  &:hover {
    opacity: .9;
  }

  svg {
    display: block;
    fill: var(--text);
    width: .6rem;
    height: auto;
  }
  
  p {
    color: var(--text);
    font-weight: 800;
  }
}

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

.mainWrapper {
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