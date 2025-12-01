<template>
  <section class="space-y-8">
    <h2 class="text-3xl font-semibold text-[#e50914]"
        style="font-family: var(--font-serif);">
      Lägg till en film till din filmsamling
    </h2>

    <!-- Card containing the movie form -->
    <div class="card">
      <MovieForm @added="handleAdded" />
    </div>

    <!-- Card containing loading, error, table and success states -->
    <div class="card min-h-[200px] relative">

      <!-- Loading spinner and message -->
      <div v-if="loading"
           class="flex flex-col items-center justify-center py-10">
           
        <svg class="animate-spin h-10 w-10 text-[#e50914]" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10"
                  stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>

        <p class="text-black-300 text-xl mt-4"
           style="font-family: var(--font-sans);">
          Hämtar filmer från servern...
        </p>
      </div>

      <!-- Error feedback if API request fails -->
      <div v-if="error"
           class="text-red-500 font-semibold py-6 text-center">
        Kunde inte hämta filmer. Försök igen strax.
      </div>

      <!-- Movies table displayed when data is loaded -->
      <div v-if="!loading && !error"
           class="animate-fade-in">
        <MovieTable
          :movies="movies"
          @deleted="handleDeleted"
          @updated="handleUpdated"
        />
      </div>

      <!-- Global success message for add, delete, update -->
      <p v-if="successMessage"
         class="text-green-500 font-semibold mt-4 text-center animate-fade-in">
        {{ successMessage }}
      </p>

    </div>
  </section>
</template>

<script>
// Importing axios and components
import axios from "axios"
import MovieForm from "../components/MovieForm.vue"
import MovieTable from "../components/MovieTable.vue"

export default {
  components: { MovieForm, MovieTable },

  // Local state variables for movies, UI states and messages
  data() {
    return {
      movies: [],
      loading: false,
      error: false,
      successMessage: "" // Appears after deletion or update
    }
  },

  // Fetching movies from backend
  methods: {
    async fetchMovies() {
      this.loading = true
      this.error = false

      try {
        const res = await axios.get(
          "https://moment2-2-1.onrender.com/movies",
          { timeout: 0 } // Render cold-start
        )
        this.movies = res.data
      } catch (err) {
        console.error("Error loading movies:", err)
        this.error = true
      } finally {
        this.loading = false
      }
    },

    // When movie is added
    handleAdded() {
      this.successMessage = "Filmen har lagts till!"
      setTimeout(() => (this.successMessage = ""), 3000)
      this.fetchMovies()
    },

    // When movie is deleted
    handleDeleted() {
      this.successMessage = "Filmen har raderats!"
      setTimeout(() => (this.successMessage = ""), 3000)
      this.fetchMovies()
    },

    // When movie is updates 
    handleUpdated() {
      this.successMessage = "Filmen har uppdaterats!"
      setTimeout(() => (this.successMessage = ""), 3000)
      this.fetchMovies()
    }
  },

  mounted() {
    this.fetchMovies()
  }
}
</script>

<style scoped>
/* Simple fade-in animation */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.25s ease-out;
}
</style>
