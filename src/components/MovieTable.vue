<template>
  <div class="overflow-x-auto">

    <!-- Table displaying all movies -->
    <table class="w-full border-collapse">
      <thead class="bg-neutral-100 text-gray-800">
        <tr>
          <th class="p-3 border border-neutral-300 text-left">Titel</th>
          <th class="p-3 border border-neutral-300 text-left">Studio</th>
          <th class="p-3 border border-neutral-300 text-left">År</th>
          <th class="p-3 border border-neutral-300 text-left">Betyg</th>
          <th class="p-3 border border-neutral-300 text-left">Animated</th>
          <th class="p-3 border border-neutral-300 text-left">Åtgärder</th>
        </tr>
      </thead>

      <!-- Loop through movie list -->
      <tbody>
        <tr
          v-for="m in movies"
          :key="m._id"
          class="hover:bg-neutral-50 transition-colors"
        >
          <td class="p-3 border border-neutral-200">{{ m.title }}</td>
          <td class="p-3 border border-neutral-200">{{ m.studio }}</td>
          <td class="p-3 border border-neutral-200">{{ m.releaseYear }}</td>
          <td class="p-3 border border-neutral-200">{{ m.rating }}</td>
          <!-- Show Yes/No for animated -->
          <td class="p-3 border border-neutral-200">
            {{ m.animated ? "Ja" : "Nej" }} 

          </td>

          <!-- Action buttons -->
          <td class="p-3 border border-neutral-200 flex gap-3 justify-center">

            <!-- Open update modal for update movie -->
            <button
              @click="openUpdateModal(m)"
              class="bg-yellow-400 text-black py-1 px-3 rounded-2xl hover:bg-yellow-500 transition-colors text-sm"
            >
              Uppdatera
            </button>

            <!-- Delete movie -->
            <button
              @click="openDeleteModal(m._id)"
              :disabled="loadingId === m._id"
              class="bg-[#e50914] text-white py-1 px-3 rounded-2xl hover:bg-red-700 transition-colors text-sm flex items-center gap-2"
            >
              <span v-if="loadingId !== m._id">Radera</span>

              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10"
                    stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              </span>
            </button>

          </td>
        </tr>
      </tbody>
    </table>

    <!-- Success message -->
    <p v-if="success" class="text-green-500 font-semibold mt-4">
      {{ success }}
    </p>

    <!-- Delete-modal -->
    <ConfirmModal
      :show="showDeleteModal"
      title="Radera film"
      message="Är du säker på att du vill radera denna film? Detta går inte att ångra."
      @cancel="closeDeleteModal"
      @confirm="confirmDelete"
    />

    <!-- Update-modal -->
    <UpdateModal
      :show="showUpdateModal"
      :movie="selectedMovie"
      @cancel="closeUpdateModal"
      @confirm="confirmUpdate"
    />

  </div>
</template>

<script>
import axios from "axios"
import ConfirmModal from "./ConfirmModal.vue"
import UpdateModal from "./UpdateModal.vue"

const API = import.meta.env.VITE_API_URL

export default {
  props: ["movies"],
  emits: ["deleted", "updated"],
  components: { ConfirmModal, UpdateModal },

  // Tracks which movie is loading (delete spinner)
  data() {
    return {
      loadingId: null,
      success: "",
      showDeleteModal: false,
      showUpdateModal: false,
      selectedId: null,
      selectedMovie: null
    }
  },

  methods: {
    // Open delete confirmation modal
    openDeleteModal(id) {
      this.selectedId = id
      this.showDeleteModal = true
    },

    // Close delete modal
    closeDeleteModal() {
      this.selectedId = null
      this.showDeleteModal = false
    },

    // Confirm delete request
    async confirmDelete() {
      try {
        this.loadingId = this.selectedId
        this.success = ""

        // Delete request to backend
        await axios.delete(`${API}/movies/${this.selectedId}`) 

        this.$emit("deleted")
        this.success = "Filmen har raderats!"

        setTimeout(() => (this.success = ""), 3000)
      } catch (err) {
        console.error("Kunde inte radera filmen", err)
        alert("Kunde inte radera filmen.")
      } finally {
        this.loadingId = null
        this.closeDeleteModal()
      }
    },

    // Open update modal
    openUpdateModal(movie) {
      this.selectedMovie = movie
      this.showUpdateModal = true
    },

    // Close update modal
    closeUpdateModal() {
      this.selectedMovie = null
      this.showUpdateModal = false
    },

    // Confirm update request
    async confirmUpdate(updatedMovie) {
      try {
        this.success = ""
        
        // PUT request to update movie
        await axios.put(
          `${API}/movies/${updatedMovie._id}`,
          updatedMovie
        )

        this.$emit("updated")
        this.success = "Filmen har uppdaterats!"

        setTimeout(() => (this.success = ""), 3000)
      } catch (err) {
        console.error("Kunde inte uppdatera filmen", err)
        alert("Kunde inte uppdatera filmen.")
      } finally {
        this.closeUpdateModal()
      }
    }
  }
}
</script>

