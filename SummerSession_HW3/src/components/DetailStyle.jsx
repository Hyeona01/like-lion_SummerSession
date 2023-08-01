import { styled } from "styled-components";

export const DetailSection = styled.section`
    width: 700px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 50px;
    margin: 50px auto;
`;
export const DetailBasic = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
`;
export const DetailPlace = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    text-align: start;
`;

export const DetailDate = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  text-align: end;
`;

export const AirCondition = styled.div`
    font-size: 1.3em;
    font-weight: 600;
    height: 200px;
    width: 300px;
    border-radius: 20px;
    line-height: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => `${props.bgcolor}`};
    .title{
        color: white;
    }
`;

export const DetailLi = styled.li`
line-height: 2em;
`;