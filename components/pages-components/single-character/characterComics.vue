<script setup>
   const props = defineProps({
      comics: Array,
   });

   const showAll = ref(false);
</script>

<template>
   <div class="mt-8 p-[30px] bg-black rounded-2xl" v-if="comics?.length">
      <h3 class="text-[28px] font-[700]">comics ({{ comics?.length }})</h3>
      <div
         class="mt-5 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 overflow-hidden relative"
         :class="[showAll ? 'max-h-auto' : 'max-h-[330px]']">
         <SingleCharacterComic v-for="serie in comics" :name="serie.name" />
         <!-- cover -->
         <span
            v-show="!showAll"
            class="character-cover absolute bottom-0 right-0 w-full h-[130px] bg-black flex items-center justify-center pt-8">
            <button
               @click="showAll = true"
               class="bg-white text-black px-[14px] py-[10px] rounded-[8px]">
               Show All Comics
            </button>
         </span>
      </div>
   </div>
</template>

<style scope>
   .character-cover {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
   }
</style>
