import styled from "styled-components";

export const ContainerCategory = styled.div`
  position: relative;
  padding-left: 3%;
  padding-bottom: 3rem;
`;
export const Title = styled.h2`
  color: #e5e5e5;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ContainerArrows = styled.div`
  position: absolute;
  z-index: 2;
  width: 96.5%;
  transform: translateX(-27px);
  display: flex;
  justify-content: space-between;
  height: 0;
`;
export const NextAndPrevius = styled.div`
  height: 83.25%;
  width: 1.75rem;
  opacity: 0.1;
  transform: translate(9px, 15px);
  background: hsla(0, 0%, 8%, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  position: relative;
  height: 270px;

  & > svg {
    fill: #fff;
  }

  &:hover {
    opacity: 1;
  }
  &:nth-child(2) {
    right: 0;
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
`;
export const Image = styled.img`
  scale: 0.9;
  transform: translateX(${(props) => props.indice * -675}px);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    scale: 0.95;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 920px) {
    transform: translateX(${(props) => props.indice * -525}px);

  }
`;
