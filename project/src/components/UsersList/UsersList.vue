<template>
  <Loader v-if="loading" />

  <v-list
    v-else
    class="overflow-auto"
    height="100vh"
  >
    <v-subheader>
      Users
    </v-subheader>

    <v-list-item-group mandatory>
      <UserItem :user="all" />

      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </v-list-item-group>
  </v-list>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';
import UserItem from '@/components/UserItem/UserItem.vue';

export default ({
  name: 'users-list',
  components: {
    Loader,
    UserItem,
  },
  data() {
    return {
      all: {
        id: 'all',
        name: 'All posts',
        website: '',
      },
    };
  },
  computed: {
    users() {
      return this.$store.state.users.users;
    },
    loading() {
      return this.$store.state.users.usersLoading;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  },
});

</script>
