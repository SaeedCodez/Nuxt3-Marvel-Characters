<script setup>
   const emits = defineEmits(['tryAgain']);
</script>

<template>
   <div
      class="py-[15px] px-[20px] bg-white text-black text-[17px] font-[400] rounded relative overflow-hidden">
      <div class="flex items-center justify-between">
         <p><slot /></p>
         <button
            @click="emits('tryAgain')"
            class="bg-gray-100 hover:bg-gray-200 transition-all h-full px-[30px] absolute right-0">
            try again
         </button>
      </div>
   </div>
</template>
