<template>
  <div class="wrapper">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
      <input placeholder="Search for a country..." type="text" name="search" id="search">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background: var(--element);
    border-radius: .25rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 3rem;
      border-radius: .25rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;

      svg {
        width: 1.2rem;
        margin-right: 1rem;
        fill: var(--text);
      }

      input {
        border: none;
        background: transparent;
        width: 100%;
        font-size: 1rem;
        font-weight: 800;
        color: var(--text);

        &::placeholder {
          color: var(--text);
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
</style>