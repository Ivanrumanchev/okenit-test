<template>
  <v-list-item class="mb-2">
    <v-lazy width="100%">
      <v-card>
        <v-card-title class="d-block">
          <v-chip
            v-if="authorName"
            class="float-right ml-2"
            outlined
          >
            {{ authorName }}
          </v-chip>

          <span v-if="title">
            {{ title }}
          </span>
        </v-card-title>

        <v-card-text v-if="body">
          {{ body }}
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
import { mapGetters } from 'vuex';
import { AppRoute } from '@/const';

export default ({
  name: 'post-item',

  props: {
    id: Number,
    userId: Number,
    title: String,
    body: String,
  },

  computed: {
    ...mapGetters(['getUserById']),
    authorName() {
      const author = this.getUserById(this.userId);

      return author.name;
    },
    linkUrl() {
      return `${AppRoute.CommentsId}${this.id}`;
    },
  },
});
</script>
