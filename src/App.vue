<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Global header navigation -->
    <Header />
    <!-- Main content area where Vue Router loads pages -->
    <main class="max-w-5xl mx-auto px-6 py-10">
      <router-view />
    </main>

    <!-- Global footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>
