<template>
  <v-sheet
    class="d-flex flex-column align-center justify-center"
    height="100vh"
    elevation="0"
    shaped
  >
    <span class="text-h6 text-center px-2">
      {{ message }}
    </span>

    <v-btn
      :to="linkUrl"
      class="mt-2"
      text
      rounded
    >
      To all posts
      <v-icon class="ml-2">
        mdi-arrow-right-thick
      </v-icon>
    </v-btn>
  </v-sheet>
</template>

<script>
import { AppRoute, EmptyMessage } from '@/const';

export default ({
  name: 'empty-list',

  props: {
    message: {
      type: String,
      default: EmptyMessage.Start,
    },
  },

  data() {
    return {
      linkUrl: AppRoute.AllPosts,
    };
  },
});
</script>
