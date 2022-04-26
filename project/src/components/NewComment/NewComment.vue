<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Create new comment
      </v-btn>
    </template>

    <v-card>
      <v-form
        ref="form"
        v-model="form"
      >
        <v-card-title class="text-h5">
          New comment
        </v-card-title>

        <v-card-text>
          <v-text-field
            class="mb-5"
            v-model="title"
            :rules="[rules.length(25), rules.required]"
            counter="25"
            label="Title"
          />

          <v-textarea
            v-model="body"
            :rules="[rules.length(200), rules.required]"
            maxlength="200"
            counter
            auto-grow
            filled
            rows="3"
            label="Comment"
          />
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
            @click="$refs.form.reset()"
          >
            Clear
          </v-btn>

          <v-spacer />

          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            depressed
            :disabled="!form"
            :loading="isLoading"
            @click="onSubmit"
          >
            Submit

            <v-icon class="ml-2">
              mdi-send
            </v-icon>
          </v-btn>

          <v-btn
            absolute
            top
            right
            icon
            rounded
            @click="dialog = false"
          >
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'new-comment',
  data: () => ({
    dialog: false,
    form: false,
    title: '',
    body: '',
    rules: {
      length: (len) => (v) => (v || '').length <= len || `Invalid character length, max ${len}`,
      required: (v) => !!v?.trim() || 'This field is required',
    },
  }),
  computed: {
    isLoading() {
      return this.$store.state.comments.newCommentLoading;
    },
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('postComment', {
          title: this.title,
          body: this.body,
        });

        this.$refs.form.reset();

        this.dialog = false;

        this.$vToastify.success('Новый комментарий добавлен!');
      } catch (error) {
        this.$vToastify.error(error.message);
      }
    },
  },
};
</script>
