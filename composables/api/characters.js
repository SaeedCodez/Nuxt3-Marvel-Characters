
export function getCharacters(options = {}) {

      const config = useRuntimeConfig()
      options.baseURL = config.public.apiBaseUrl

      const { ts, publicKey: apikey, hashApi: hash } = generateHashApi();
      options.params = { ts, apikey, hash };

      return $fetch(`/characters`, options)
            .then(({ data }) => data)

}