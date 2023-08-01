// Detail.jsx
import { useLocation } from "react-router-dom";
import {
  DetailSection,
  DetailBasic,
  DetailPlace,
  DetailDate,
  AirCondition,
  DetailLi,
} from "./components/DetailStyle";

const Detail = () => {
  const { state } = useLocation();

  const date = state.date.slice(0,-3)

  return (
    <DetailSection>
      <DetailBasic>
        <DetailPlace>
          {state.ter} | {state.loca}
        </DetailPlace>
        <DetailDate>{date}</DetailDate>
      </DetailBasic>
      <DetailBasic>
        <ul>
          <DetailLi>미세먼지 : {state.pm1}</DetailLi>
          <DetailLi>초미세먼지농도 : {state.pm25}</DetailLi>
          <DetailLi>오존 : {state.o3}</DetailLi>
          <DetailLi>이산화질소농도 : {state.no2}</DetailLi>
          <DetailLi>일산화탄소농도 : {state.co}</DetailLi>
          <DetailLi>이황산가스농도 : {state.so2}</DetailLi>
        </ul>
        <AirCondition bgcolor={ state.rate == "좋음" ? "green" : state.rate == "나쁨" ? "red" : "" }>
          <p className="title">통합대기환경등급</p>
          <p>{state.rate || "-"}</p>
        </AirCondition>
      </DetailBasic>
    </DetailSection>
  );
};

export default Detail;
