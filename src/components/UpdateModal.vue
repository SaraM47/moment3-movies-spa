<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <!-- Modal box -->
    <div class="bg-white rounded-lg shadow-xl w-96 p-6 animate-fade-in">
      <!-- Modal title -->
      <h2
        class="text-2xl font-semibold text-gray-800 mb-4"
        style="font-family: var(--font-serif)"
      >
        Uppdatera film
      </h2>

      <!-- Update form -->
      <form @submit.prevent="submitUpdate" class="space-y-4">
        <!-- Title field -->

        <div>
          <label class="block text-gray-700 font-semibold mb-1">Titel</label>
          <input
            v-model="localMovie.title"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#e50914]"
            required
          />
        </div>

        <!-- Studio field -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Studio</label>
          <input
            v-model="localMovie.studio"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#e50914]"
            required
          />
        </div>

        <!-- Release year field -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">År</label>
          <input
            type="number"
            v-model.number="localMovie.releaseYear"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#e50914]"
            required
          />
        </div>

        <!-- Rating field -->
        <div>
          <label class="block text-gray-700 font-semibold mb-1">Betyg</label>
          <input
            type="number"
            v-model.number="localMovie.rating"
            min="0"
            max="10"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-[#e50914]"
            required
          />
        </div>

        <!-- Checkbox for animated -->
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="localMovie.animated" />
          <label class="text-gray-700">Är filmen animerad?</label>
        </div>

        <!-- Action buttons -->
        <div class="flex justify-end gap-3 pt-4">
            <!-- Cancel button -->
          <button
            type="button"
            @click="$emit('cancel')"
            class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Avbryt
          </button>

        <!-- Save/update button -->
          <button
            type="submit"
            class="px-4 py-2 bg-[#e50914] text-white rounded hover:bg-red-700 transition flex items-center gap-2"
          >
            <span v-if="!loading">Spara</span>

            <!-- Loading spinner state -->
            <span v-else class="flex items-center gap-2">
              <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Props received from parent
export default {
  props: {
    show: Boolean,
    movie: Object,
  },

  // Local copy data for movie being edited and loading state for submit button
  data() {
    return {
      localMovie: {},
      loading: false,
    };
  },

  // When 'movie' prop changes, update local copy
  watch: {
    movie: {
      immediate: true,
      handler(newVal) {
        this.localMovie = { ...newVal };
      },
    },
  },

  // Emit updated movie back to parent
  methods: {
    submitUpdate() {
      this.loading = true;
      this.$emit("confirm", this.localMovie);
      this.loading = false;
    },
  },
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
</style>
