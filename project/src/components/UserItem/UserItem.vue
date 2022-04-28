<template>
  <v-list-item :to="linkUrl">
    <v-list-item-avatar>
      <v-icon>
        mdi-human-handsup
      </v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-if="name">
        {{ name }}
      </v-list-item-title>

      <v-list-item-subtitle v-if="website">
        {{ website }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { AppRoute } from '@/const';

export default ({
  name: 'user-item',

  props: {
    id: [String, Number],
    name: String,
    website: String,
  },

  computed: {
    linkUrl() {
      return `${AppRoute.PostsId}${this.id}`;
    },
  },
});
</script>
