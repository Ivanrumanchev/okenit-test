<template>
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto pt-10"
    max-width="250"
    max-height="100vh"
    type="table-row-divider@10"
  />

  <div v-else>
    <v-btn
      :class="['mr-3', 'drawer-button', { 'd-none': drawer }]"
      absolute
      top
      right
      small
      rounded
      elevation="0"
      @click="drawer = !drawer"
    >
      Select user

      <v-icon class="ml-1">
        mdi-gesture-tap
      </v-icon>
    </v-btn>

    <v-navigation-drawer
      class="drawer"
      v-model="drawer"
      absolute
      mobileBreakpoint="960"
    >

      <v-list
        class="overflow-auto"
        height="100vh"
      >
        <v-subheader>
          Users
        </v-subheader>

        <v-list-item-group mandatory>
          <UserItem v-bind="all" />

          <UserItem
            v-for="user in users"
            :key="user.id"
            :id="user.id"
            :name="user.name"
            :website="user.website"
          />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UserItem from '@/components/UserItem/UserItem.vue';

export default ({
  name: 'users-list',

  components: {
    UserItem,
  },

  data() {
    return {
      all: {
        id: 'all',
        name: 'All posts',
        website: '',
      },
      drawer: true,
    };
  },

  computed: {
    ...mapState({
      users: (state) => state.users.users,
      loading: (state) => state.users.usersLoading,
    }),
  },

  mounted() {
    this.$store.dispatch('fetchUsers');
  },
});

</script>

<style scoped>
  @media (min-width: 960px) {
    .drawer {
      position: relative;
    }
  }

  .drawer-button {
    z-index: 1000;
  }
</style>
