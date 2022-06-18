<template>
  <div>
    <img src="https://flagcdn.com/de.svg" alt="DE">
    <div class="wrapper">
      <h3>Germany</h3>
      <div class="details">
        <p><strong>Population:</strong> 81,770,900</p>
        <p><strong>Region:</strong> Europe</p>
        <p><strong>Capital:</strong> Berlin</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  div {
    display: inline-flex;
    flex-direction: column;
    border-radius: 4px;
    background: white;

    img {
      width: 16rem;
      height: auto;
      border-radius: 4px 4px 0 0;
    }

    .wrapper {
      padding: 1rem;

      h3 {
        color: var(--text);
        font-weight: 800;
        font-size: 1.2rem;
      }

      .details {
        font-size: .8rem;
      }
    }
  }
</style>