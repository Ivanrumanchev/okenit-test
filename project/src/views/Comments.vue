<template>
  <NotFoundScreen v-if="notFound" />

  <v-container v-else class="pt-8">
    <v-row>
      <v-col
        class="pr-8 pr-sm-3"
        cols="12"
        sm="5"
        md="4"
      >
        <UserInfo />

        <v-btn
          absolute
          top
          left
          small
          rounded
          elevation="0"
          @click="onButtonClick"
        >
          Назад к постам

          <v-icon class="ml-4">
            mdi-arrow-u-left-top
          </v-icon>
        </v-btn>
      </v-col>

      <v-divider inset vertical />

      <v-col
        cols="12"
        sm="7"
        md="8"
      >
        <PostInfo />
      </v-col>
    </v-row>

    <v-divider />

    <v-row>
      <v-col cols="12">
        <CommentsList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import _get from 'lodash/get';
import UserInfo from '@/components/UserInfo/UserInfo.vue';
import PostInfo from '@/components/PostInfo/PostInfo.vue';
import CommentsList from '@/components/CommentsList/CommentsList.vue';
import NotFoundScreen from '@/components/NotFoundScreen/NotFoundScreen.vue';
import { AppRoute } from '@/const';

export default {
  name: 'comments',

  components: {
    UserInfo,
    PostInfo,
    CommentsList,
    NotFoundScreen,
  },

  computed: {
    ...mapState({
      notFound: (state) => state.comments.notFound,
      userId: (state) => _get(state, 'comments.currentPost.userId'),
    }),
  },

  methods: {
    onButtonClick() {
      const route = this.userId ? `${AppRoute.PostsId}${this.userId}` : AppRoute.AllPosts;

      this.$router.push(route);
    },
  },
};
</script>
