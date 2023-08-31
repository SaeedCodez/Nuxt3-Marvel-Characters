<script setup>
   const route = useRoute();
   const characterID = route.params.character_id;

   const {
      data: character,
      error,
      pending,
      refresh,
   } = useAsyncData(() => getCharacter(characterID));
</script>

<template>
   <section class="pt-20 pb-14 lg:px-0 px-[20px]">
      <div v-if="pending" class="w-fit">
         <!-- loading -->
         loading...
      </div>

      <div v-else-if="error">
         <!-- error -->
         <M-alert class="mt-14" @tryAgain="refresh()">
            An error occurred. Please try again :(
         </M-alert>
      </div>

      <!-- content -->
      <div v-else class="uppercase relative">
         <Head>
            <Title>{{ character.name }} CHARACTER</Title>
         </Head>
         <!-- texts -->
         <div class="w-full text-center">
            <h1 class="text-[50px] mb-1 font-[600]">{{ character.name }}</h1>
            <p class="text-[16px] leading-loose font-[300]">
               {{ character.description }}
            </p>
            <!-- Go Back Link -->
            <nuxt-link to="/">
               <p class="text-white opacity-50 hover:opacity-100 mt-6">Go Back</p>
            </nuxt-link>
         </div>
         <!-- image -->
         <div class="w-full mt-10">
            <img
               class="rounded-[10px] w-full"
               :src="character.thumbnail.path + '.' + character.thumbnail.extension"
               :alt="character.name" />
         </div>
         <!-- series -->
         <SingleCharacterSeries :series="character.series.items" />
         <!-- comics -->
         <SingleCharacterComics :comics="character.comics.items" />
      </div>
   </section>
</template>
