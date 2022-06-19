<template>
  <Header></Header>
  <router-view />
</template>

<script lang="ts" setup>
import Header from "./components/header.vue";
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
  overflow-y: scroll;
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
