import { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import {
  BannerContainer,
  BannerContents,
  BannerTitle,
  BannerButton,
  BannerPlay,
  BannerInfo,
  BannerDes,
  BannerFadeBottom,
  BannerPlayContainer,
  BannerIframe,
} from "./Styled";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  // 첫 렌더링때만 fetchMovie 실행
  useEffect(() => {
    fechMovie();
  }, []);

  //비동기 함수
  const fechMovie = async () => {
    // 현재 상영 영화 정보 url인 fetchNowPlaying 에 GET을 요청해 받아온 값을 request에 저장
    const request = await axios.get(requests.fetchNowPlaying);

    // 현재 상영 영화 리스트들 중 하나를 랜덤으로 선택하기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 랜덤으로 선택된 영화의 상세 정보를 가져오기 위해 GET 요청
    // params에 videos 정보를 추가로 요청해 함께 가져옴
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    }); //data라는 변수에 movieDetail의 정보를 만들겠다는 거/data라는 key값을 찾고 있으면 mociceDetail에 할당 없다면(undefind)이면 빈다...

    // 영화의 상세 정보를 movie에 저장
    setMovie(movieDetail);
  };

  console.log(movie);

  // 이걸로 바꿔줌
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  movie.overview = truncate(movie.overview, 100);

  const [isClicked, setIsClicked] = useState(false);

  if (!isClicked) {
    return (
      <BannerContainer
        movie={movie.backdrop_path}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <BannerContents>
          <BannerTitle>
            {movie.title || movie.name || movie.original_name}
          </BannerTitle>
          <BannerButton>
            <BannerPlay
              onClick={() => {
                setIsClicked(true);
              }}
            >
              Play
            </BannerPlay>
            <BannerInfo>More Information</BannerInfo>
          </BannerButton>
          <BannerDes>{movie.overview}</BannerDes>
          {/* <BannerDes>{truncate(movie.overview,100)}</BannerDes> */}
        </BannerContents>
        <BannerFadeBottom />
      </BannerContainer>
    );
  } else {
    return (
      <BannerPlayContainer>
        <BannerIframe
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=&autoplay=1&mute=1&playlist=${movie.videos.results[0].key}`}
          title="YouTube video player"
          frameborder="0"
          allow=" autoplay; fullscreen"
          allowFullScreen
        />
      </BannerPlayContainer>
    );
  }
}
