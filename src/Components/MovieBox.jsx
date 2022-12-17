import "../Styles/Components/MovieBox.css";
import { useState } from "react";
function MovieBox({ movieDetail }) {
  //console.log(movieDetail);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="titleBox">
              <div className="title">
                <b>{movieDetail.title}</b>
              </div>

              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
            <div className="contentBox">
              <div className="imageSec">
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`}
                  alt=""
                />
              </div>
              <div className="contentSec">
                <p>
                  {" "}
                  <b>Release date:</b> {movieDetail.release_date}
                </p>
                <p>{movieDetail.overview}</p>
                <p>
                  {" "}
                  <b>{movieDetail.vote_average}</b>/ 10 ({" "}
                  {movieDetail.vote_count} total votes)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="movieContainer" onClick={toggleModal}>
        <div className="moviePoster">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieDetail.poster_path}`}
            alt="Movie image"
            className="movieImage"
          />
          <div className="movieRatingContainer">
            <span className="movieRating">{movieDetail.vote_average}</span>
          </div>
        </div>
        <div className="movieTitle">{movieDetail.title}</div>
      </div>
    </>
  );
}

export default MovieBox;
