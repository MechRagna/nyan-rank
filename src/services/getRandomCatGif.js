export const getRandomCatGif = async () => {
  const url = `https://api.giphy.com/v1/gifs/random?tag=cat&api_key=4Z8yYrptkgEZCKbKOF88szarShF2MjZJ`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return {
    id: data.id,
    title: data.title,
    url: data.images?.downsized_medium?.url,
  };
};
