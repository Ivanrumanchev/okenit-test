<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="align-self-center mx-4"
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
            :rules="[rules.checkLength(25), rules.checkRequired]"
            counter="25"
            label="Title"
          />

          <v-textarea
            v-model="body"
            :rules="[rules.checkLength(200), rules.checkRequired]"
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
            @click="onReset"
          >
            Clear
          </v-btn>

          <v-spacer />

          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            depressed
            :disabled="!form"
            :loading="submitting"
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
import _get from 'lodash/get';
import { checkLength, checkRequired } from '@/utils/validators';

export default {
  name: 'new-comment',

  data: () => ({
    dialog: false,
    form: false,
    title: '',
    body: '',
    rules: {
      checkLength,
      checkRequired,
    },
    submitting: false,
  }),

  methods: {
    async onSubmit() {
      this.submitting = true;

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

      this.submitting = false;
    },
    onReset() {
      const resetFunc = _get(this.$refs, 'form.reset');

      if (resetFunc && typeof resetFunc === 'function') {
        resetFunc();
      }
    },
  },
};
</script>
