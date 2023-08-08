import { useEffect, useState, useRef } from "react";
import axios from "../../api/axios";
import MovieModal from "../MovieModal/MovieModal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  RowContainer,
  RowPosters,
  RowPoster,
  RowTitle,
} from "./Styled";

export default function Row({ isLarge1, title, id, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  //비동기 함수
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);

    setMovies(request.data.results);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
      <RowContainer>
        <RowTitle>{title}</RowTitle>
        <RowPosters>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <RowPoster
                  isLarge2={isLarge1 ? "true" : "false"}
                  src={`https://image.tmdb.org/t/p/original/${
                    isLarge1 ? movie.poster_path : movie.backdrop_path //isLarge1이면 포스터 이미지를, false일 경우에는 백드롭이미지를
                  }`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </RowPosters>
      </RowContainer>
    </>
  );
}
