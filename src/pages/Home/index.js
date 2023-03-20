import { useEffect, useState } from "react";
import LogoNetflix from "../../assets/imgs/logonetflix.png";
import AvatarUser from "../../assets/imgs/avatar_user.png";
import Tmdb from "../../services/api";
import { FaSearch, FaBell } from "react-icons/fa";
import MainFilm from "../../components/MainFilm";
import {
  Avatar,
  Header,
  HeaderLeft,
  HeaderRight,
  Infantil,
  Li,
  ListMovies,
  Loading,
  Logo,
  Main,
  Nav,
  Notifications,
  Ul,
  User,
} from "./styles";
import Category from "../../components/Category";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [mainFilm, setMainFilm] = useState({});
  const [visibleHeader, setVisibleHeader] = useState(false);

  useEffect(() => {
    async function loadAllMovies() {
      try {
        const listMovies = await Tmdb.getHomePageList();
        setMovies(listMovies);

        const listOriginalsFilmes = listMovies.filter((category) => {
          return category.slug === "originals";
        })[0].items.results;

        const movie =
          listOriginalsFilmes[randomNumber(0, listOriginalsFilmes.length)];

        const detailMovie = await Tmdb.getShowMovie(movie.id, "/tv");
        setMainFilm(detailMovie);
      } catch (error) {
        console.log(error);
      }
    }

    loadAllMovies();
  }, []);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    function showHeader() {
      const valueY = window.scrollY > 25;
      setVisibleHeader(valueY);
    }

    document.addEventListener("scroll", showHeader);

    return () => {
      document.removeEventListener("scroll", showHeader);
    };
  }, []);

  return (
    <>
      <Header visible={visibleHeader}>
        <HeaderLeft>
          <Logo src={LogoNetflix}></Logo>
          <Nav>
            <Ul>
              <Li>Início</Li>
              <Li>Séries</Li>
              <Li>Filmes</Li>
              <Li>Bombando</Li>
              <Li>Minha lista</Li>
              <Li>Navegar por idiomas</Li>
            </Ul>
          </Nav>
        </HeaderLeft>
        <HeaderRight>
          <FaSearch />
          <Infantil>Infantil</Infantil>
          <Notifications>
            <FaBell />
          </Notifications>
          <User>
            <Avatar src={AvatarUser}></Avatar>
          </User>
        </HeaderRight>
      </Header>
      <Main>
        <MainFilm film={mainFilm} />
        <ListMovies>
          {movies.length > 1 &&
            movies.map((item, index) => (
              <Category category={item} key={index} />
            ))}

          {movies.length === 0 && <Loading />}
        </ListMovies>
      </Main>
    </>
  );
}
