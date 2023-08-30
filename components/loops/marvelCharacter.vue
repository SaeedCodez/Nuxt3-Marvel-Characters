<script setup>
   const props = defineProps({
      id: Number,
      name: String,
      imageUrl: String,
   });
</script>

<template>
   <nuxt-link :to="'/character/' + id">
      <section
         class="relative w-[152px] h-[201px] overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-200">
         <div>
            <!-- image -->
            <img
               loading="lazy"
               :src="imageUrl"
               class="h-[201px] group-hover:h-[260px] transition-all duration-300 object-cover" />
            <!-- name -->
            <div class="w-full absolute bottom-[17px] text-center z-20">
               <p class="text-[16px] text-white font-[500]">{{ name }}</p>
            </div>
         </div>
         <div>
            <!-- border cover -->
            <div
               class="border-[2.7px] p-[2.7px] overflow-hidden border-[rgba(255,255,255,0.3)] absolute top-0 left-0 w-full h-full z-10">
               <!-- top -->
               <span
                  class="w-[50px] h-[50px] bg-white opacity-[0.15] absolute -top-[25px] -left-[25px] group-hover:-top-[45px] rotate-45 transition-all duration-300"></span>
               <!-- bottom -->
               <span
                  class="w-[50px] h-[50px] bg-white opacity-[0.3] absolute -bottom-[25px] -right-[25px] rotate-45 group-hover:-bottom-[45px] transition-all duration-300"></span>
            </div>
            <!-- gradiant cover -->
            <span class="character-cover absolute top-0 left-0 w-full h-full"></span>
         </div>
      </section>
   </nuxt-link>
</template>

<style>
   .character-cover {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
   }
</style>
