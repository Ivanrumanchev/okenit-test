<template>
  <Loader v-if="loading" />

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
    <v-card-title class="text-h5">
      {{ user.name }}
    </v-card-title>

    <v-card-subtitle>
      Post author
    </v-card-subtitle>

    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ user.phone }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Mobile
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-icon>
          <v-icon>
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ user.email }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Personal
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-icon>
          <v-icon>
            mdi-search-web
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ user.website }}
          </v-list-item-title>

          <v-list-item-subtitle>
            Website
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-icon>
          <v-icon>
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ user.address.city }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset />

      <v-list-item>
        <v-list-item-icon>
          <v-icon>
            mdi-account-tie
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ user.company.name }}
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
import Loader from '@/components/Loader/Loader.vue';

export default ({
  name: 'user-info',
  components: {
    Loader,
  },
  data() {
    return {
      userId: this.$route.params.id,
    };
  },
  computed: {
    user() {
      return this.$store.state.comments.currentUser;
    },
    loading() {
      return this.$store.state.comments.currentUserLoading;
    },
  },
});
</script>
