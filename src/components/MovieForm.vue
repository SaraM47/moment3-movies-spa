<template>
  <div class="grid md:grid-cols-2 gap-8">

    <!-- Form section for adding a new movie -->
    <form @submit.prevent="addMovie" class="grid gap-6">

      <!-- Movie title input -->
      <div>
        <label for="title" class="block text-gray-800 font-semibold mb-1 text-lg">
          Titel
        </label>
        <input
          id="title"
          v-model="title"
          placeholder="Titel"
          required
          class="w-full h-12 px-4 text-lg border border-neutral-300 rounded-lg 
                focus:ring-2 focus:ring-[#e50914] outline-none"
        />
      </div>

      <!-- Studio -->
      <div>
        <label for="studio" class="block text-gray-800 font-semibold mb-1 text-lg">
          Studio
        </label>
        <input
          id="studio"
          v-model="studio"
          placeholder="Studio"
          required
          class="w-full h-12 px-4 text-lg border border-neutral-300 rounded-lg 
                focus:ring-2 focus:ring-[#e50914] outline-none"
        />
      </div>

      <!-- Year -->
      <div>
        <label for="releaseYear" class="block text-gray-800 font-semibold mb-1 text-lg">
          År
        </label>
        <input
          id="releaseYear"
          v-model.number="releaseYear"
          type="number"
          placeholder="År"
          required
          class="w-full h-12 px-4 text-lg border border-neutral-300 rounded-lg 
                focus:ring-2 focus:ring-[#e50914] outline-none"
        />
      </div>

      <!-- Rating -->
      <div>
        <label for="rating" class="block text-gray-800 font-semibold mb-1 text-lg">
          Betyg
        </label>
        <input
          id="rating"
          v-model.number="rating"
          type="number"
          placeholder="Betyg 0 till 10"
          required
          class="w-full h-12 px-4 text-lg border border-neutral-300 rounded-lg 
                focus:ring-2 focus:ring-[#e50914] outline-none"
        />
      </div>

      <!-- Checkbox for animated movies or not -->
      <div class="flex items-center gap-2 text-gray-800 text-lg">
        <input type="checkbox" id="animated" v-model="animated" class="h-5 w-5" />
        <label for="animated">Är filmen animerad?</label>
      </div>

      <!-- Submit button with loading state -->
      <button
        class="w-full bg-[#e50914] text-white text-lg py-3 rounded-3xl
               hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2"
        :disabled="loading"
      >
        <span v-if="!loading">Lägg till film</span>

        <span v-else class="flex items-center gap-2">
          <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10"
                    stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          Sparar...
        </span>
      </button>

      <!-- Success message when movie is added -->
      <p v-if="success" class="text-green-600 font-semibold animate-fade-in">
        Filmen har lagts till!
      </p>

    </form>

    <!-- Right side image shown on desktop -->
    <div
      class="hidden md:block rounded-lg shadow-lg relative"
      style="
        background-image: url('/assortment-cinema.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    >
    </div>

  </div>
</template>

<script>
// Importing axios for API requests
import axios from "axios"

const API = import.meta.env.VITE_API_URL

// Emits event to parent when movie is added
export default {
  emits: ["added"],

  data() {
    return {
      title: "",
      studio: "",
      releaseYear: "",
      rating: "",
      animated: false,
      loading: false,
      success: false
    }
  },

  methods: {
    async addMovie() {
      try {
        this.loading = true
        this.success = false

        // Send POST request to server
        await axios.post(`${API}/movies`, {
          title: this.title,
          studio: this.studio,
          releaseYear: this.releaseYear,
          rating: this.rating,
          animated: this.animated,
        })

        // Notify parent that a movie was added
        this.$emit("added")

        // Reset form from fields
        this.title = ""
        this.studio = ""
        this.releaseYear = ""
        this.rating = ""
        this.animated = false

        // Show message 
        this.success = true

        // Hide message after 3 seconds
        setTimeout(() => {
          this.success = false
        }, 3000)

      } catch (err) {
        console.error("Kunde inte lägga till filmen", err)
        alert("Kunde inte lägga till filmen.")
      } finally {
        this.loading = false
      }
    }
  }
}
</script>


<style scoped>
/* Simple fade-in animation for success message */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.25s ease-out;
}
</style>
