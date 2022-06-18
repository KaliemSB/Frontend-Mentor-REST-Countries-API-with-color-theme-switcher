<template>
  <div>
    <select v-model="value" @click="handleSubmitSelect" name="regions" id="regions">
      <option value="hide">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<String>("hide")

const emit = defineEmits(['select'])

const handleSubmitSelect = () => {
  emit("select", { type: 'region', value: value.value })
}
</script>

<style lang="scss" scoped>
select {
  border: none;
  padding: 1rem 1.2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
  background: var(--element);
  color: var(--text);
  font-weight: 800;
  font-size: 1rem;
  border-radius: .25rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;

  option {
    color: var(--text);
    background-color: var(--element);
    font-weight: 800;
  }

  &:focus {
    outline: none;
  }
}
</style>