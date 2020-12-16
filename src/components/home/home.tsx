import React from "react";
import styled from "styled-components";

import { RouterLink } from "../common/link";

const Block = styled.article`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  background-color: #0066ff;
  color: white;
  &:hover {
    background-color: #0053cf;
  }
  &:active {
    background-color: #003366;
  }
`;

const Home = () => {
  return (
    <Block>
      <RouterLink to="/canvas/wave">
        <Button>웨이브</Button>
      </RouterLink>
      <RouterLink to="/canvas/point">
        <Button>마우스</Button>
      </RouterLink>
      <RouterLink to="/canvas/my">
        <Button>내 포인트</Button>
      </RouterLink>
      <RouterLink to="/canvas/happybirthday">
        <Button>생일축하!</Button>
      </RouterLink>
    </Block>
  );
};

export default Home;
