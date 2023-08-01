import { useEffect, useState } from "react";
import { BodySection, DataTable, HeadSection, HeadText, HomeContainer, TableTd, TableTh } from "./components/BodyStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
const navigate = useNavigate();

  // State 작성------------------------------------------------
  const [weatherData,setWeatherData] = useState([]);//여기에 API 데이터 받을 거임
  const {VITE_APP_API_KEY} = import.meta.env;

  // Function 작성---------------------------------------------
  const fetchData = async() => {
    try {
      const response = await axios.get(
        `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/5/`
      );
      setWeatherData(response.data.RealtimeCityAir.row);
    } catch (error) {
      console.log('데이터를 불러오는 데 실패');
      //로그아웃처리 및 로컬스토리지 초기화 등의 처리      
    }
  };
  // OPEN API 비동기로 불러와 State에 저장하기


  // ComponentDidMount-----------------------------------------
  useEffect(() => {
    fetchData();
  }, [])//마운트될때 한번만 실행함!!!!

  const sortedData = weatherData.sort((a, b) => a.PM10 - b.PM10).slice(0,3)
  console.log(sortedData);

  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              <TableTh>일시</TableTh>
              <TableTh>측정소</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>초미세먼지</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((data, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: data.MSRSTE_NM == "중구" ? "orange" : "",
                }}
              >
                <TableTd>{data.MSRDT}</TableTd>
                <TableTd
                  onClick={() =>
                    navigate(`/detail/${data.MSRSTE_NM}`, {
                      state: {
                        date: data.MSRDT,
                        ter: data.MSRRGN_NM,
                        loca: data.MSRSTE_NM,
                        pm1: data.PM10,
                        pm25: data.PM25,
                        o3: data.O3,
                        no2: data.NO2,
                        co: data.CO,
                        so2: data.SO2,
                        rate: data.IDEX_NM,
                        index: data.IDEX_MVL,
                      },
                    })
                  }
                >
                  {data.MSRSTE_NM}
                </TableTd>
                <TableTd style={{ color: sortedData.includes(data) ? "yellow" : "" }}>
                  {data.PM10}
                </TableTd>
                <TableTd>{data.PM25}</TableTd>
                <TableTd style={{backgroundColor: data.IDEX_NM == "좋음" ? "green" : data.IDEX_NM === "나쁨" ? "red" : ""}}>
                  {data.IDEX_NM || "-"}
                </TableTd>
                <TableTd>{data.IDEX_MVL}</TableTd>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
