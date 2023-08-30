<script setup>
   const { data, pending, error } = useAsyncData(() => getCharacters());
</script>

<template>
   <section class="mt-[100px]">
      <div class="flex lg:flex-row flex-col justify-between items-center">
         <!-- title -->
         <div>
            <h1 class="text-[46px] font-[500] uppercase text-center">
               marvel characters
            </h1>
         </div>
         <!-- search -->
         <div class="relative flex items-center">
            <input
               class="py-[16px] px-[53px] bg-[rgba(255,255,255,0.16)] placeholder:text-[rgba(255,255,255,0.63)] rounded-[10px] lg:w-[250px] focus:w-[350px] transition-all"
               type="text"
               placeholder="SEARCH..." />
            <IconsStrokeSearch class="w-[18px] fill-white absolute left-[20px]" />
         </div>
      </div>
      <!-- Marvel Characters -->
      <div class="grid grid-cols-5 mt-14">
         <loopsMarvelCharacter />
      </div>
   </section>
</template>
