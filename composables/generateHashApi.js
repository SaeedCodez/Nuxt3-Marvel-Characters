import md5 from 'md5'

export const generateHashApi = () => {

      const runTimeConfig = useRuntimeConfig();
      const { privateKey, publicKey, ts } = runTimeConfig.app;

      // a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
      const hashApi = md5(ts + privateKey + publicKey);
      return { ts, publicKey, hashApi };
}