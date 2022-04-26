<template>
  <v-container>
    <h1 class="title">
      404.

      <br />

      <small>
        Page not found
      </small>
    </h1>

    <hr />

    <button
      class="arrow-circle"
      type="button"
      @click="onButtonClick"
    >
      Go to main page

      <svg
        class="arrow-circle-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <g
          fill="none"
          stroke="#337AB7"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <circle class="arrow-circle-iconcircle" cx="16" cy="16" r="15.12"></circle>

          <path
            class="arrow-circle-iconArrow"
            d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98">
          </path>
        </g>
      </svg>
    </button>
  </v-container>
</template>

<script>
import { AppRoute } from '@/const';

export default {
  name: 'not-found-screen',
  data() {
    return {
      mainLinkUrl: AppRoute.Home,
    };
  },
  methods: {
    async onButtonClick() {
      await this.$router.push(this.mainLinkUrl);
      this.$store.commit('setNotFound', false);
    },
  },
};
</script>

<style scoped lang="css" src="@/components/NotFoundScreen/NotFoundScreen.css">
</style>
