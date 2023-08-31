import { defineStore } from 'pinia'

export const charactersStore = defineStore('charactersStore', () => {

      //
      // single Characters 
      //

      const singleCharacters = {};
      const characterPerPage = 20;
      let totalCharacters = 0;
      const savedPages = [];

      const pageHasSaved = (pageNumber) => {
            return savedPages.includes(pageNumber)
      }

      const setSignleCharacter = (characterData) => {
            singleCharacters[characterData.id] = characterData;
      }

      const getSingleCharacter = (characterID) => {

            if (String(characterID) in singleCharacters) {
                  return singleCharacters[characterID];
            } else {
                  return false
            };

      }

      //
      // page Characters 
      //

      const setPageCharacters = (newCharacters, pageNumber = 1) => {

            totalCharacters = newCharacters.total;

            if (!pageHasSaved(pageNumber)) {
                  newCharacters.results.forEach(newCharacter => {
                        newCharacter.page = pageNumber;
                        setSignleCharacter(newCharacter);
                  });
                  savedPages.push(pageNumber);
            }

      }

      const getPageCharacters = (pageNumber = 1) => {

            if (!pageHasSaved(pageNumber)) return false;

            let pageCharacters = [];

            const singleCharactersArray = Object.values(singleCharacters);

            singleCharactersArray.some(character => {
                  if (pageCharacters.length >= characterPerPage) {
                        return true;
                  }
                  else if (character?.page == pageNumber) {
                        pageCharacters.push(character);
                  }
            });

            return {
                  limit: characterPerPage,
                  total: totalCharacters,
                  results: pageCharacters
            };

      }

      return { setPageCharacters, getPageCharacters, singleCharacters, setSignleCharacter, getSingleCharacter }
})