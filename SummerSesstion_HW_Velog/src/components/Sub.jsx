import React from "react";
import { styled } from "styled-components";
import { Wrapper } from "../App";

export const WithIcon = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
`;
const UnderLine = styled(WithIcon)`
  border-bottom: 3px solid ${(props) => props.theme.textColor};
`;
const DropDown = styled.select`
  height: 25px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  border: 0;
`;

const Sub = () => {
    return (
      <>
        <Wrapper style={{ height: "20vh" }}>
          <Wrapper style={{ width: "300px" }}>
            <UnderLine>
              <span className="material-symbols-outlined">trending_up</span>
              &nbsp; 트렌딩
            </UnderLine>
            <WithIcon style={{ color: "gray" }}>
              <span className="material-symbols-outlined">history</span>
              &nbsp; 최신
            </WithIcon>
            <DropDown style={{ height: "25px", width: "80px"}}>
              <option value="이번주">이번 주</option>
              <option value="오늘">오늘</option>
            </DropDown>
          </Wrapper>
          <span className="material-symbols-outlined">more_vert</span>
        </Wrapper>
      </>
    );
};

export default Sub;