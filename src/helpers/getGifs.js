import gifApi from "../config/configApi";

export const getGifs = async (category) => {
  const url = `/search?q=${encodeURI(category)}&limit=20`;

  const resp = await gifApi.get(url);
  const data = resp.data.data;

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });

  return gifs;
};
