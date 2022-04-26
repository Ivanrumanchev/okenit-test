<template>
  <v-list-item :to="linkUrl">
    <v-list-item-avatar>
      <v-icon>
        mdi-human-handsup
      </v-icon>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>
        {{ user.name }}
      </v-list-item-title>

      <v-list-item-subtitle>
        {{ user.website }}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { AppRoute } from '@/const';

export default ({
  name: 'user-item',
  props: ['user'],
  computed: {
    linkUrl() {
      return `${AppRoute.PostsId}${this.user.id}`;
    },
  },
});
</script>

<style scoped>
</style>
