<template>
  <v-list-item class="mb-2">
    <v-lazy width="100%">
      <v-card>
        <v-card-title class="justify-space-between flex-nowrap">
          <span class="mr-2">
            {{ post.title }}
          </span>

          <v-chip class="align-self-start flex-shrink-0" outlined>
            {{ author.name }}
          </v-chip>
        </v-card-title>

        <v-card-text>
          {{ post.body }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            :to="linkUrl"
          >
            To comments

            <v-icon class="ml-4">
              mdi-comment-text-multiple-outline
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-lazy>
  </v-list-item>
</template>

<script>
import { AppRoute } from '@/const';

export default ({
  name: 'post-item',
  props: {
    post: Object,
  },
  computed: {
    author() {
      return this.$store.getters.getUserById(this.post.userId);
    },
    linkUrl() {
      return `${AppRoute.CommentsId}${this.post.id}`;
    },
  },
});
</script>
