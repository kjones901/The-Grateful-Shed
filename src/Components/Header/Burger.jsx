// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../colors";
import NavBar from "./Nav";

const StyledBurger = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 20px;
  top: 25px;
  z-index: 20;
  display: none;

  &:hover {
    filter: drop-shadow(0 0 0.1rem ${colors.dark});
    cursor: pointer;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
  }

  div {
    width: 3rem;
    height: 0.4rem;
    background-color: ${colors.red};
    border-radius: 2px;
    transform-origin: -5px;
    transition: all 0.2s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavBar open={open} onClick={() => setOpen(!open)} />
    </>
  );
};

export default Burger;
