<template>
  <section class="max-w-3xl mx-auto px-6 py-10 text-gray-200 space-y-6">

    <h2 class="text-3xl font-semibold text-[#e50914]" style="font-family: var(--font-serif);">
      Reflektion över arbetet med Vue.js
    </h2>

    <!-- Intro paragraph about the project -->
    <p class="leading-relaxed">
      I detta moment har jag byggt en Single-Page-Application med Vue.js som konsumerar
      min REST-webbtjänst skapad i Fastify. Arbetet har gett mig en tydlig förståelse för hur
      Vue fungerar i praktiken och hur dess komponentbaserade struktur gör utvecklingen mer
      organiserad och överskådlig.
    </p>

    <!-- Section of installation -->
    <h3 class="text-2xl font-semibold text-[#ff0310] mb-2" style="font-family: var(--font-serif);">
      Installation och uppstart
    </h3>
    <p class="leading-relaxed">
      Installationen av Vue gick smidigt och bättre än vad man förvänta sig genom att använda <span class="font-mono">npm create vue@latest</span> i terminalen. Konfigurationen med Tailwind CSS och Vue Router upplevdes däremot att det krävde lite mer arbete men när konfigurationen väl var korrekt fungerade projektet stabilt och utan problem.
    </p>

    <!-- Section on what was easy -->
    <h3 class="text-2xl font-semibold text-[#ff0310] mb-2" style="font-family: var(--font-serif);">
      Vad som var enkelt
    </h3>
    <p class="leading-relaxed">
      Jag tycker att processen för att skapa komponenter och dela upp logiken i mindre delar var väldigt intuitivt. Vue:s reaktiva system med <span class="font-mono">v-model</span>, props och emits gjorde det
      enkelt att skicka data mellan formulär, tabell samt övergripande sidor. Även routing och navigation
      fungerade bra och var lätt att implementera.
    </p>

    <!-- Ssection on what was difficult -->
    <h3 class="text-2xl font-semibold text-[#ff0310] mb-2" style="font-family: var(--font-serif);">
      Vad som var svårt
    </h3>
    <p class="leading-relaxed">
      Det som upplevdes mest utmanande var att hantera komponentkommunikation med props och emits tog lite tid att förstå, särskilt när olika komponenter behövde reagera på förändringar samtidigt. Jag märkte också att reaktivitet i Vue kräver tydlig struktur. Detta var för att undvika att data hamnar i fel komponent. Dessutom var det en utmaning att implementera en helt egen bekräftelsemodal för att den ska samspela med tabellens state, loading-indikatorer och API-anrop korrekt. Därmed Vue Router och arbetet med dynamiska states vid navigering krävde extra fokus för att få allt att fungera bra. Tillsammans gav dessa delar en bra förståelse för hur viktig komponentdesign och tydlig dataflödeslogik är i Vue.
    </p>

    <!-- Section on overall impression -->
    <h3 class="text-2xl font-semibold text-[#ff0310] mb-2" style="font-family: var(--font-serif);">
      Min upplevelse av Vue.js
    </h3>
    <p class="leading-relaxed">
      Vue är ett ramverk jag definitivt vill arbeta vidare med eftersom det var ett rätt så enkel ramverk som kombinerar enkel syntax med tydlig komponentstruktur. Få möjlighet att bygga responsiv design snabbt med Tailwind gör utvecklingsprocessen både rolig och effektiv. Jag upplever att Vue är lätt att lära
      sig men samtidigt kraftfullt nog för större projekt.
    </p>

  </section>
</template>
