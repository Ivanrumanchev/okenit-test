<template>
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto pt-4"
    max-width="300"
    min-height="410"
    type="card"
  />

  <div
    v-else-if="!user"
    class="mt-4 ml-4"
  >
    Не удалось загрузить данные пользователя
  </div>

  <v-card
    v-else
    height="100%"
    elevation="0"
  >
    <v-card-title
      v-if="name"
      class="text-h5"
    >
      {{ name }}
    </v-card-title>

    <v-card-subtitle v-if="name">
      Post author
    </v-card-subtitle>

    <v-list>
      <v-list-item v-if="phone">
        <v-list-item-icon>
          <v-icon>
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-wrap">
            {{ phone }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Mobile
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item v-if="email">
        <v-list-item-icon>
          <v-icon>
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-wrap">
            {{ email }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Personal
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item v-if="website">
        <v-list-item-icon>
          <v-icon>
            mdi-search-web
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-wrap">
            {{ website }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Website
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item v-if="city">
        <v-list-item-icon>
          <v-icon>
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-wrap">
            {{ city }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item v-if="company">
        <v-list-item-icon>
          <v-icon>
            mdi-account-tie
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-wrap">
            {{ company }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Jobs
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import _get from 'lodash/get';

export default ({
  name: 'user-info',

  computed: {
    ...mapState({
      user: (state) => state.comments.currentUser,
      userLoading: (state) => state.comments.currentUserLoading,
      postLoading: (state) => state.comments.currentPostLoading,
    }),
    loading() {
      return this.userLoading || this.postLoading;
    },
    name() {
      return this.user.name;
    },
    phone() {
      return this.user.phone;
    },
    email() {
      return this.user.email;
    },
    website() {
      return this.user.website;
    },
    city() {
      return _get(this.user, 'address.city');
    },
    company() {
      return _get(this.user, 'company.name');
    },
  },
});
</script>
