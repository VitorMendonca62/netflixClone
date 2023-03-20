const API_KEY = "772231ce07d9ebbcd92b06138c811733";
const API_URL_BASE = "https://api.themoviedb.org/3";

async function fetchAPI(endpoint) {
  try {
    const response = await fetch(
      API_URL_BASE + endpoint + `&api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const API_s = {
  getHomePageList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await fetchAPI("/discover/tv?with_network=213&language=pt-br"),
      },
      {
        slug: "treding",
        title: "Recomendados para você",
        items: await fetchAPI("/trending/all/week?language=pt-br"),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await fetchAPI("/movie/top_rated?language=pt-br"),
      },
      {
        slug: "action",
        title: "Ação",
        items: await fetchAPI("/discover/movie?with_network=28&language=pt-br"),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await fetchAPI("/discover/movie?with_network=35&language=pt-br"),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await fetchAPI("/discover/tv?with_network=27&language=pt-br"),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await fetchAPI("/discover/tv?with_network=10749&language=pt-br"),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await fetchAPI("/discover/tv?with_network=99&language=pt-br"),
      },
    ];
  },
  getShowMovie: async (id, type) => {
    const response = await fetchAPI(`${type}/${id}?language=pt-br`);
    return response;
  },
};
export default API_s;
