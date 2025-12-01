<template>
  <section class="max-w-5xl mx-auto px-6 py-10 space-y-8">

    <!-- Banner image -->
    <div class="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
      <img
        src="/banner.jpg"
        alt="Film Banner"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Header text -->
    <h2
      class="text-3xl font-semibold text-[#e50914]"
      style="font-family: var(--font-serif);"
    >
      Välkommen till filmsamling
    </h2>

    <!-- Intro text with personal text section about animated movie interest -->
    <p class="text-gray-200 text-lg leading-relaxed" style="font-family: var(--font-sans);">
      Detta är min filmsamling byggd i Vue 3 och Tailwind CSS, inspirerad av Netflix gränssnitt.
      Här kan jag lägga till, visa och radera filmer via min Fastify-API som jag utvecklade i Moment 2.2. Projektet är skapat för  mitt intresse för animerade filmer.
    </p>

    <p class="text-gray-200 text-lg leading-relaxed" style="font-family: var(--font-sans);">
      Jag har alltid haft ett starkt intresse för animerade filmer. Jag växte upp med anime, Disney, Pixar och DreamWorks, och trots min ålder fortsätter animation att vara en viktig del av min vardag. Det är inte bara underhållning, utan också en stor inspirationskälla för mitt eget skapande. Jag ritar ofta av scener och karaktärer från mina favoritfilmer och samlar även artbooks från olika animationsstudios. Intresset har följt med mig genom hela livet och är en av anledningarna till att jag gillar att arbeta med visuella och kreativa projekt.
      <br/><br/>
      En oväntad detalj som jag lyssnade på föreläsningen för denna område är att Vue faktiskt döper sina versioner efter kända manga- och animeserier, till exempel har versioner fått namn som One Piece, Hunter x Hunter, Slam Dunk och mycket mera. Fick uppleva något oväntat personligt och gav mig en extra, nostalgisk koppling till ramverket, vilket var bara häftigt och veta.
    </p>
  </section>
</template>
