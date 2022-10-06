import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Movie from "../components/Movie";

const Detail = ({ title, summary }) => {
  const { id } = useParams();
  const x = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    console.log(id);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {loading
        ? "loading..."
        : "hello"}
    </div>
  );
};

export default Detail;
