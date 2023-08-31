<script setup>
   const setPageBackground = ref(false);

   onMounted(() => {
      setTimeout(() => {
         setPageBackground.value = true;
      }, 10);
   });
</script>

<template>
   <main :class="[setPageBackground && 'have-background']">
      <div class="content">
         <NuxtPage />
      </div>
   </main>
</template>

<style>
   .page-enter-active,
   .page-leave-active {
      transition: all 0.4s;
   }
   .page-enter-from,
   .page-leave-to {
      opacity: 0;
      /* filter: blur(1.5rem); */
   }
</style>
