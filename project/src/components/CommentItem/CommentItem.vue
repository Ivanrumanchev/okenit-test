<template>
  <v-list-item class="mb-2">
    <v-lazy width="100%">
      <v-card>
        <v-card-title>
          {{ comment.name }}
        </v-card-title>

        <v-card-subtitle>
          {{ comment.email }}
        </v-card-subtitle>

        <v-card-text>
          {{ comment.body }}
        </v-card-text>
      </v-card>
    </v-lazy>
  </v-list-item>
</template>

<script>
export default ({
  name: 'comment-item',
  props: {
    comment: Object,
  },
});
</script>
