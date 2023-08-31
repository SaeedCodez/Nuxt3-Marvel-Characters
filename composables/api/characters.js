import { charactersStore } from '~/stores/characters';

export async function getCharacters(searchValue, page = 1) {

      // get characters from penia store
      const characters_store = charactersStore();
      const { setPageCharacters, getPageCharacters } = characters_store;

      // return characters from penia store
      const currentPageCharacters = getPageCharacters(page);
      if (!searchValue && currentPageCharacters) {
            return currentPageCharacters;
      };

      // geting api base url from  Runtime Config
      const config = useRuntimeConfig()

      // generate api hash key and api key
      const { ts, publicKey: apikey, hashApi: hash } = generateHashApi();

      // fetching options
      const options = {
            params: { limit: 20, offset: 0, ts, apikey, hash },
            baseURL: config.public.apiBaseUrl,
      }

      // adding offset to option params
      if (page > 1) options.params.offset = (page - 1) * options.params.limit;

      // adding search value to url params
      if (searchValue) options.params.nameStartsWith = searchValue;

      // fetching the request
      return await $fetch(`/characters`, options)
            .then(({ data }) => {
                  setPageCharacters(data, page)
                  return data;
            })

}

export async function getCharacter(characterID) {

      // get characters from penia store
      const characters_store = charactersStore();
      const { getSingleCharacter, setSignleCharacter } = characters_store;

      // return characters from penia store
      const currentCharacter = getSingleCharacter(characterID);
      if (currentCharacter) {
            return currentCharacter;
      };

      // for geting api base url from Runtime Config
      const config = useRuntimeConfig()

      // generate api hash key and api key
      const { ts, publicKey: apikey, hashApi: hash } = generateHashApi();

      // fetching options
      const options = {
            params: { ts, apikey, hash },
            baseURL: config.public.apiBaseUrl,
      }

      // fetching the request
      return await $fetch(`/characters/` + characterID, options)
            .then(({ data }) => {
                  let characterData = data.results[0];
                  setSignleCharacter(characterData);
                  return characterData;
            })

}