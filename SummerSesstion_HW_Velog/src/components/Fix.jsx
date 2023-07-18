import React, { useState } from "react";
import { styled } from "styled-components";

const FixLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 150px;
  background-color: ${(props) => props.theme.userButton};
  position: fixed;
  left: 100px;
  bottom: 70px;
  border-radius: 30px;
  font-size: 0.8em;
  div {
    background-color: ${(props) => props.theme.boxColor};
    border-radius: 50px;
    width: 40px;
    height: 40px;
    border: 1px solid #d0d0d0;
    span {
      font-size: 1.6rem;
      padding: 8px 0 0 7px;
    }
  }
`;

const Fix = () => {
  const [heart, setHeart] = useState(0);
  const count = () => {
    setHeart(heart + 1);
  }

  return (
    <FixLeft>
      <div>
        <span onClick={count} className="material-symbols-outlined">favorite</span>
      </div>
      <span>{heart}</span>
      <div>
        <span className="material-symbols-outlined">share</span>
      </div>
    </FixLeft>
  );
};
export default Fix;
