const KEY = 'a8bf1f725f0d452702d7b1955b7e461b';
// Substitua o CHAVE_DA_API com a chave gerada no site.

// export const API_KEY = 'api_key=a8bf1f725f0d452702d7b1955b7e461b';
// export const BASE_URL = 'https://api.themoviedb.org/3/movie/';
// export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// export const language = 'language=pt-BR';
const fetchData = async (number) => {
  const url = `https://api.themoviedb.org/3/movie/${number}?api_key=${KEY}&language=pt-BR`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};
export default fetchData;
