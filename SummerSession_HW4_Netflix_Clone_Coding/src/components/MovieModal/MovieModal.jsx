import React, { useRef, useEffect } from "react";
import {
  ModalContainer,
  Modal,
  ModalCloseBtn,
  ModalPosterImg,
  ModalContent,
  ModalDetail,
  ModalUserPerc,
  ModalTitle,
  ModalOverview,
} from "./Styled";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {

  const modal = useRef();

  const handleCloseModal = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <Modal ref={modal}>
        <ModalCloseBtn onClick={() => setModalOpen(false)}>X</ModalCloseBtn>
        <ModalPosterImg
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="modal__poster-img"
        />
        <ModalContent>
          <ModalDetail>
            <ModalUserPerc>100% for you</ModalUserPerc>
            {release_date ? release_date : first_air_date}
          </ModalDetail>
          <ModalTitle>{title ? title : name}</ModalTitle>
          <ModalOverview>평점 : {vote_average}</ModalOverview>
          <ModalOverview>{overview}</ModalOverview>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}
