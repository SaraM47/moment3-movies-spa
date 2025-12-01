<template>
  <!-- Modal shows only when 'show' is true, with box, title, message text and action buttons -->
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center z-50 modal-backdrop"
  >
    <div class="bg-white rounded-lg shadow-xl w-80 p-6 animate-fade-in">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">
        {{ title }}
      </h2>

      <p class="text-gray-700 mb-6">
        {{ message }}
      </p>

      <div class="flex justify-end gap-3">
        <button
          @click="$emit('cancel')"
          class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Avbryt
        </button>

        <!-- Confirm delete button -->
        <button
          @click="$emit('confirm')"
          class="px-4 py-2 bg-[#e50914] text-white rounded hover:bg-red-700 transition"
        >
          Ja, radera
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// ConfirmModal component definition with props for show, title, and message
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Background overlay behind modal */
.modal-backdrop {
  background: rgba(0, 0, 0, 0.35);
}

/* Fade-in animation for modal box */
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
