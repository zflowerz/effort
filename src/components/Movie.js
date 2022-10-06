import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genre }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}> {title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
        <ul>
          {genre.map((gr) => (
            <li key={gr}>{gr}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
