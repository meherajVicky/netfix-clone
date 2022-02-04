const Api_key = "c583d6c0b7963cfd21c0d146f112f70e";
const request = {
  fetchForTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchForNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchForTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchForAction: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchForComedy: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchForHorror: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchForRomance: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchForDocument: `/discover/movie?api_key=${Api_key}&with_genres=99`,
};
export default request;
