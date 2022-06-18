<template>
  <Header></Header>
  <Container style="margin-top: 1rem;">
    <Card/>
  </Container>
</template>

<script lang="ts" setup>
import Header from "./components/header.vue";
import Card from "./components/card.vue";
import Container from "./components/container.vue";
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
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
</style>