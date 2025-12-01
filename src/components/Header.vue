<template>
  <!-- Header wrapper with navigation container -->
  <header class="bg-black text-white border-b border-neutral-800">
    <nav class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Site title -->
      <h1
        class="text-3xl font-semibold text-[#e50914]"
        style="font-family: var(--font-serif);"
      >
        Filmer
      </h1>

      <!-- Desktop navigation (hidden on mobile via md:flex) -->
      <ul class="hidden md:flex gap-6 text-2xl">
        <li>
          <router-link
            to="/"
            class="text-[#e50914] hover:text-white transition-colors relative"
          >
            Startsida
          </router-link>
        </li>

        <li>
          <router-link
            to="/movies"
            class="text-[#e50914] hover:text-white transition-colors relative"
          >
            Filmer
          </router-link>
        </li>

        <li>
          <router-link
            to="/info"
            class="text-[#e50914] hover:text-white transition-colors relative"
          >
            Info
          </router-link>
        </li>
      </ul>

      <!-- Mobile menu toggle button (hamburger / close icon) -->
      <button
        @click="open = !open"
        class="md:hidden text-[#e50914] hover:text-white transition-colors"
        aria-label="Öppna/stäng mobilmeny"
      >
        <!-- Hamburger icon when closed -->
        <svg
          v-if="!open"
          class="h-7 w-7"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <!-- Close (X) icon when open -->
        <svg
          v-else
          class="h-7 w-7"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile dropdown menu -->
    <div
      v-if="open"
      class="md:hidden bg-black border-t border-neutral-800 px-6 py-4 space-y-2"
    >
      <router-link
        to="/"
        class="block text-[#e50914] hover:text-white transition-colors text-xl"
        @click="open = false"
      >
        Startsida
      </router-link>

      <router-link
        to="/movies"
        class="block text-[#e50914] hover:text-white transition-colors text-xl"
        @click="open = false"
      >
        Filmer
      </router-link>

      <router-link
        to="/info"
        class="block text-[#e50914] hover:text-white transition-colors text-xl"
        @click="open = false"
      >
        Info
      </router-link>
    </div>
  </header>
</template>

<script>
// Holds open/closed state of mobile menu
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
