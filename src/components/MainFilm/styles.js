import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  padding-top: 8rem;
  margin-left: 3%;
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      180deg,
      rgba(20, 20, 20, 0) 0%,
      rgba(20, 20, 20, 0.8062675561797753) 30%,
      rgba(20, 20, 20, 1) 90%
    );
    z-index: 1;
    top: 0;
  }

  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 25%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(20, 20, 20, 1) 60%,
      rgba(20, 20, 20, 0.7) 95%,
      rgba(20, 20, 20, 0) 100%
    );
    z-index: 3;
    top: 0;
  }
`;
export const Title = styled.h1`
  position: relative;
  z-index: 4;
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
`;
export const Infos = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 16rem;
  padding: 1.5rem 0;
  & p {
    color: #e4e4e4;
  }
`;
export const VoteAverage = styled.p`
  color: #10b553 !important;
`;
export const Launch = styled.p``;
export const Seasons = styled.p``;
export const Description = styled.p`
  position: relative;
  z-index: 4;
  max-width: 25%;
  min-width: 20rem;
  margin-bottom: 1.5rem;
  color: #a1a1a1;
`;
export const Buttons = styled.div`
  position: relative;
  z-index: 4;
  width: 20rem;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;

  & > button {
    width: 8rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: none;
    font-weight: 700;
    font-size: 0.9rem;
  }
`;
export const Play = styled.button`
  background-color: #e4e4e4;
  cursor: pointer;

  &:hover {
    background-color: #a1a1a1;
  }
`;
export const MyList = styled.button`
  background-color: rgba(125, 125, 125, 0.6);
  color: #fff;

  cursor: pointer;
  &:hover {
    background-color: #747474;
  }
`;

export const Genres = styled.div`
  position: relative;
  margin-top: 1.5rem;
  z-index: 4;
  color: #a1a1a1;
  font-weight: 700;
  & > span {
    font-weight: 400;
  }
`;
