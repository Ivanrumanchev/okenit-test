<template>
  <NotFoundScreen v-if="this.$store.state.comments.notFound" />

  <v-container v-else class="pt-8">
    <v-row>
      <v-col cols="4">
        <UserInfo />

        <v-btn
          small
          text
          rounded
          absolute
          top
          left
          @click="onButtonClick"
        >
          Назад к постам

          <v-icon class="ml-4">
            mdi-arrow-u-left-top
          </v-icon>
        </v-btn>
      </v-col>

      <v-divider inset vertical />

      <v-col cols="8">
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
  methods: {
    onButtonClick() {
      const id = this.$store.state.comments.currentPost?.userId;

      const route = id ? `${AppRoute.PostsId}${id}` : AppRoute.AllPosts;

      this.$router.push(route);
    },
  },
};
</script>
