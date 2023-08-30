
export function getCharacters(searchValue, page = 1) {


      // geting api base url from  Runtime Config
      const config = useRuntimeConfig()

      // generate api hash key and api key
      const { ts, publicKey: apikey, hashApi: hash } = generateHashApi();

      // fetching options
      const options = {
            params: {
                  limit: 20,
                  offset: 0,
                  ts,
                  apikey,
                  hash
            },
            baseURL: config.public.apiBaseUrl,
      }

      // adding offset to option params
      if (page > 1) options.params.offset = (page - 1) * options.params.limit;

      console.log(page);

      // adding search value to url params
      if (searchValue) options.params.nameStartsWith = searchValue;

      // fetching the request
      return $fetch(`/characters`, options)
            .then(({ data }) => data)

}