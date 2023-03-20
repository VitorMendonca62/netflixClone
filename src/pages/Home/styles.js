import styled, { keyframes } from "styled-components";

export const Header = styled.header`
  height: 8%;
  width: 100%;
  background-color: ${(props) =>
    props.visible ? "rgb(20, 20, 20)" : "transparent"};
  padding: 0 3%;
  position: fixed;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease-in-out;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;

export const Logo = styled.img`
  width: 5rem;
  height: 2rem;
`;

export const Nav = styled.nav``;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Li = styled.li`
  font-size: 14px;
  color: #e5e5e5;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    color: #a1a1a1;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
  }
`;

export const Infantil = styled.p`
  color: #fff;
`;

export const Notifications = styled.div`
  position: relative;
  &::after {
    content: "2";
    text-align: center;
    color: #fff;
    font-size: 14px;
    display: inline-block;
    position: absolute;
    right: -4px;
    top: -4px;
    width: 1rem;
    height: 1rem;
    background-color: #f00;
    border-radius: 50%;
  }
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
  }
`;
export const User = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 40%;
    right: -20px;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    clip-path: polygon(50% 60%, 0 0, 100% 0);
    border-radius: 25%;
  }
`;
export const Avatar = styled.img``;

export const Main = styled.main`
  background-color: #141414;
`;

export const ListMovies = styled.div`
  transform: translateY(-10rem);
  z-index: 100;
  position: relative;
`;


export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  min-height: 100vh;
  background-color: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 2px solid transparent;

    border-top-color: red;
    border-bottom-color: red;
    border-left-color: red;
    border-right-color: transparent;
    animation: ${rotate} 2s linear infinite;
  }
`;
