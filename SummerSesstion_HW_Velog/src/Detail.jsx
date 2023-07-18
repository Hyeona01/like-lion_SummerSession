import React from "react";
import { styled } from "styled-components";
import Fix from "./components/Fix";

const Wrap = styled.div`
    padding: 50px 100px;
`
const DetailInfo = styled.div`
  font-size: ${(props) => props.fSize};
  margin: 30px 0;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;
const UserInfo = styled(DetailInfo)`
  font-size: 0.8rem;
  font-weight: 400;
`;

const Detail = () => {
  return (
    <Wrap>
      <Fix />
      <DetailInfo fSize="3em">[React] 나만의 hooks - 노마드코더</DetailInfo>
      <UserInfo>
        <span style={{ fontWeight: "600" }}>현아</span> · 2023년 7월 18일
      </UserInfo>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ maxWidth: "702px", maxHeight: "500px" }}
          src="../public/img/노마드코더.PNG"
          alt="이미지"
        />
      </div>
      <div style={{ margin: "50px 0", lineHeight: 1.5 }}>
        React를 가지고 내가 원하는대로 hook을 만들 수 있다니,
        <br />
        시작부터 흥미로웠다!
        <br />
        <br />
        <ul>
          <li>useTitle</li>
          <li>useInput</li>
          <li>usePageLeave</li>
          <li>useClick</li>
          <li>useFadeIn</li>
          <li>useFullscreen</li>
          <li>useHover</li>
          <li>useNetwork</li>
          <li>useNotification</li>
          <li>useScroll</li>
          <li>useTabs</li>
          <li>usePreventLeave</li>
          <li>useConfirm</li>
          <li>useAxios</li>
        </ul>
        <br />
        이렇게 많은 것들을 배웠는데 사실 남는 건 별로 없는 느낌이다.<br />
        위의 hook들이 어떨 때 사용해야 그 쓰임이 훨씬 유용해지는지 궁금해진다.<br />
        <br />
        그 중에는 지금 바로 활용할 수 있는 것도, API를 자주 사용하게 될 때 유용해질 것도 있어보인다.<br />
        <br />
        이번 강의에서 가장 크게 배운 것은 <b>'useEffect'</b>이다!<br />
        다양한 hook을 만드는 실습을 하면서 수시로 useEffect 개념을 사용한다. <br />
        'useState'는 이해하기 쉽지만, 'useEffect'는 새로운 용어나 개념이 몇몇 등장하면서 헷갈리곤 했다.<br />
        <br />
        <hr />
        <h2>useEffect와 중첩된 함수</h2>
        보통 함수를 만들 때, useEffect와 useState를 중첩하여 자유자재로 사용하는 것 같다.<br />
        노마드 코더의 강의 속 코드를 보면서 '아 이렇게 짤 수가 있겠구나.' 라는 생각이 들었다.<br />
        예컨데,  <br/>
        {`const [num, setNum] = useState(0);`}<br/>
        {`const [aNum, setAnum] = useState(0);`}<br/>
        {`const sayhello = () => console.log("hello!");`}<br/>
        {`useEffect(() => {`}<br/>
        {`  sayhello();`}<br/>
        {`}, [num]);} `}<br/>
        이런 느낌이었다. 알아보기 힘들지만 ..<br/>
        <br/>
        useTab 강의가 다른 강의보다 이해하기 쉽고 재밌어서 기억에 남는다.<br/>
        강의를 들어보니 알아야할 게 더 많다...! 화이팅~~~<br/><br/><br/>
        아 그리고 useContext를 사용해서 post 정보들을 저장하고 재사용하고싶었는데 실패했다. 
        과제는 제출하지만 더 해보다가 자야겠다...
        데이터를 list 형식으로 담았더니 공홈이나 세션자료에 있는 dictionary 형태와 달라서 그런걸까...
        리액트는 다 되는 것처럼 굴더니 왜 안될까
        물론 내가 못하는 게 맛낀하겠따
        화이팅
      </div>
    </Wrap>
  );
};

export default Detail;