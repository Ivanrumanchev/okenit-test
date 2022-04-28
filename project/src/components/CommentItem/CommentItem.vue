<template>
  <v-list-item class="mb-2">
    <v-lazy width="100%">
      <v-card>
        <v-card-title>
          {{ name }}
        </v-card-title>

        <v-card-subtitle>
          {{ email }}
        </v-card-subtitle>

        <v-card-text>
          {{ body }}
        </v-card-text>
      </v-card>
    </v-lazy>
  </v-list-item>
</template>

<script>
export default ({
  name: 'comment-item',

  props: {
    name: String,
    email: String,
    body: String,
  },
});
</script>
