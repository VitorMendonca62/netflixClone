import React, { useState } from "react";
import {
  ContainerCategory,
  Title,
  ContainerArrows,
  ContainerMovies,
  NextAndPrevius,
  Image,
} from "./styles";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Category(props) {
  let [indice, setIndice] = useState(0);

  const { title, items } = props.category;

  function nextPage() {
    setIndice(indice + 1);
    if (indice < 3) {
      return;
    }

    setIndice(0);
  }
  function previusPage() {
    setIndice(indice - 1);
    if (indice < 0) {
      return;
    }

    setIndice(3);
  }

  return (
    <ContainerCategory>
      <Title>{title}</Title>
      <ContainerArrows>
        <NextAndPrevius onClick={previusPage}>
          <FaArrowLeft />
        </NextAndPrevius>
        <NextAndPrevius onClick={nextPage}>
          <FaArrowRight />
        </NextAndPrevius>
      </ContainerArrows>
      <ContainerMovies>
        {items.results.map((movie, index) => (
          <Image
            indice={indice}
            key={index}
            src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
          />
        ))}
      </ContainerMovies>
    </ContainerCategory>
  );
}
