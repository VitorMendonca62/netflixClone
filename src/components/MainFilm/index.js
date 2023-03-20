import {
  Buttons,
  Container,
  Description,
  Genres,
  Infos,
  Launch,
  MyList,
  Play,
  Seasons,
  Title,
  VoteAverage,
} from "./styles";
import { FaPlay, FaPlus } from "react-icons/fa";

export default function MainFilm({ film }) {
  const {
    original_name,
    backdrop_path,
    vote_average,
    first_air_date,
    overview,
    seasons,
    genres,
  } = film;

  const formatedVoteAverage = vote_average?.toFixed(1);

  const namesGenrs = genres?.map((genre) => genre.name);

  const date = new Date(first_air_date);
  const year = date.getFullYear();

  return (
    <Container img={"https://image.tmdb.org/t/p/original" + backdrop_path}>
      <Title>{original_name}</Title>
      <Infos>
        <VoteAverage>{formatedVoteAverage} pontos</VoteAverage>
        <Launch>{year}</Launch>
        <Seasons>
          {seasons?.length} temporada{seasons?.length > 1 ? "s" : ""}
        </Seasons>
      </Infos>
      <Description>{overview}</Description>
      <Buttons>
        <Play>
          <FaPlay /> Assistir
        </Play>
        <MyList>
          <FaPlus /> Minha lista
        </MyList>
      </Buttons>
      <Genres>
        Gênero: <span>{namesGenrs?.join(", ")}</span>
      </Genres>
    </Container>
  );
}
