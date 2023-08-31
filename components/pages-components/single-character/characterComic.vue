
<script setup>
   const props = defineProps({
      name: String
   })
</script>

<template>
   <div class="p-[14px] text-[14px] bg-[#ffffff36] rounded-md opacity-80 hover:opacity-100 transition-all border-[#fff0] border-[1px] hover:border-[#ffffffc7]">
      {{ name }}
   </div>
</template>
