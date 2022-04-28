<template>
  <v-container>
    <v-row>
      <v-col
        class="py-0"
        cols="12"
        md="4"
        lg="3"
      >
        <UsersList />
      </v-col>

      <v-col
        class="py-0"
        cols="12"
        md="8"
        lg="9"
      >
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from '@/components/UsersList/UsersList.vue';

export default {
  name: 'home',

  components: {
    UsersList,
  },
};
</script>
