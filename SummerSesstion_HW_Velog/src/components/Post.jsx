import { keyframes, styled } from "styled-components";
import { WithIcon } from "./Sub";
import { Link } from "react-router-dom";

const bigger = keyframes`
  0%{
    transform: translateY(-0px);
  }
  100%{
    transform: translateY(-10px);
  }
`;
const Box = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.boxColor};
  height: 400px;
  text-align: center;
  border-radius: 5px;
  /* box-shadow: 0px 0px 7px #d5d5d550; */
  &:hover {
    animation: ${bigger} 1s;
  }

  img {
    height: 170px;
    max-width: 300px;
  }
`;
const PostBody = styled.div`
  height: 140px;
  text-align: start;
  padding: 20px;
  line-height: 1.5;
  font-size: 0.8em;
  color: ${(props) => props.theme.postBasic};
  /* color: #999999; */
`;
const PostTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.postBold};
`;
const PostDate = styled(PostBody)`
  position: absolute;
  bottom: 0;padding: 0;
`;
const UserInfo = styled.div`
  padding: 0 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.postBold};
  font-size: 0.8em;
  border-top: 1px solid #d5d5d5;
  img {
    max-height: 30px;
    border-radius: 50px;
  }
`;

const data = [
  {
    mainImg: "../../public/img/styled-component.PNG",
    title: "[React]styled-component 정리",
    body: "context",
    date: "2023년 7월 18일",
    user: "hyeona",
    userImg: "../../public/img/미모티콘.PNG",
  },
  {
    mainImg: "../../public/img/react-router.png",
    title: "[React]React-Router-Dom 정리",
    body: "쓰고싶다",
    date: "2023년 7월 18일",
    user: "혀나",
    userImg: "../../public/img/미모티콘.PNG",
  },
  {
    mainImg: "../../public/img/노마드코더.PNG",
    title: "[React]나만의 hooks-노마드코더",
    body: "블라블라",
    date: "2023년 7월 18일",
    user: "어려웡",
    userImg: "../../public/img/미모티콘.PNG",
  },
];

const Post = () => {
  return (
    <>
      {data.map((post, index) => (
        <Link to="/detail" key={index}>
          <Box>
            <img src={post.mainImg}/>
            <PostBody>
              <PostTitle>{post.title}</PostTitle>
              <div>{post.body}</div>
              <PostDate>{post.date}</PostDate>
            </PostBody>
            <UserInfo>
              <WithIcon>
                <img src={post.userImg} /> &nbsp;
                <span style={{ color: "#999999" }}>by</span> &nbsp;
                <span style={{ fontWeight: "600" }}>{post.user}</span>
              </WithIcon>
              <div>♥ 1,004</div>
            </UserInfo>
          </Box>
        </Link>
      ))}
    </>
  );
}

export default Post;