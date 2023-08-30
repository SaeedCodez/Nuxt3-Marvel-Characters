<script setup>
   import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
   import "@ocrv/vue-tailwind-pagination/styles";

   const route = useRoute();
   const router = useRouter();

   const searchValue = ref(route.query.search ? route.query.search : "");
   const currentPage = ref(route.query.page ? route.query.page : 1);
   const totalCharacters = ref(0);

   const characters = ref(null);
   const pending = ref(false);
   const error = ref(false);

   async function getCharactersHandler() {
      pending.value = true;
      error.value = false;

      await getCharacters(searchValue.value, currentPage.value)
         .then((response) => {
            totalCharacters.value = response.total;
            characters.value = response.results;
         })
         .catch((err) => {
            console.log(err);
            error.value = err;
         })
         .finally(() => {
            pending.value = false;
         });
   }

   getCharactersHandler();

   // search timer
   //
   let searchTimeout = null;
   function searchTimerHandler() {
      // remove last search timeout
      if (searchTimeout !== null) {
         clearTimeout(searchTimeout);
      }
      // set new search timeout
      searchTimeout = setTimeout(() => {
         currentPage.value = 1;
         router.replace({ query: { search: searchValue.value } });
         getCharactersHandler();
      }, 1000);
   }

   // pagination
   //
   function changingPage(newPage) {
      currentPage.value = newPage;
      router.replace({ query: { page: newPage } });
      getCharactersHandler();
   }
</script>

<template>
   <section class="lg:pt-[100px] pt-[50px] pb-14 lg:px-0 px-[20px]">
      <div
         class="flex lg:gap-0 gap-6 lg:flex-row flex-col justify-between items-center">
         <!-- title -->
         <div>
            <h1 class="lg:text-[43px] text-[35px] font-[500] uppercase text-center">
               Marvel Characters
            </h1>
         </div>
         <!-- search -->
         <div class="relative flex items-center">
            <input
               v-model="searchValue"
               @input="searchTimerHandler()"
               class="py-[16px] px-[53px] bg-[rgba(255,255,255,0.16)] placeholder:text-[rgba(255,255,255,0.63)] rounded-[10px] lg:w-[220px] lg:focus:w-[300px] w-full transition-all"
               type="text"
               placeholder="SEARCH..." />
            <IconsStrokeSearch class="w-[18px] fill-white absolute left-[20px]" />
         </div>
      </div>
      <div>
         <Transition name="fade" mode="out-in">
            <div v-if="pending" class="w-fit m-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-14 gap-[25px]">
               <!-- loaing -->
               <div
                  class="animate-pulse bg-[#ffffff2f] w-[152px] h-[201px] rounded-[5px] relative flex items-center justify-center"
                  v-for="i in 5">
                  <span
                     class="block bg-[#ffffff2c] w-[80px] h-[15px] absolute bottom-[20px] rounded-lg"></span>
               </div>
            </div>

            <div v-else-if="error">
               <!-- error -->
               <M-alert class="mt-14" @tryAgain="refresh()">
                  An error occurred. Please try again :(
               </M-alert>
            </div>

            <div v-else-if="characters?.length == 0">
               <!-- without record -->
               <M-alert class="mt-14" @tryAgain="refresh()">
                  Character not found :(
               </M-alert>
            </div>

            <div v-else>
               <!-- Characters -->
               <div
                  class="w-fit m-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-14 gap-[25px]">
                  <loopsMarvelCharacter
                     v-for="character in characters"
                     :id="character.id"
                     :name="character.name"
                     :image-url="
                        character.thumbnail.path +
                        '.' +
                        character.thumbnail.extension
                     " />
               </div>
               <!-- pagination -->
               <VueTailwindPagination
                  v-show="!pending"
                  :class="[pending && 'opacity-50']"
                  class="pagination text-black mt-10 transition-all"
                  :current="currentPage"
                  :total="totalCharacters"
                  :per-page="20"
                  @page-changed="changingPage" />
            </div>
         </Transition>
      </div>
   </section>
</template>

<style>
   .pagination input {
      background-color: #ffffff1f;
      padding: 4px 8px;
      border-radius: 6px;
      outline: none;
   }
   .pagination .border-indigo-400 {
      border: 0 !important;
   }
   .pagination section {
      padding: 0 !important;
      color: #fff;
      background-color: none;
      background: none;
      border: 0px;
   }
</style>
