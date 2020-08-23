import React, { useState } from "react";
import ImgItem from "./components/ImgItem";
import { useFetch } from "./hooks/useFetch";
// import PropTypes from 'prop-types'

const NyanRankApp = () => {
  const [state, setState] = useState(0);
  const { img, loading } = useFetch(state);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div className="nyan-rank-app">
      <h1>Nyan Rank</h1>
      <hr />

      {loading ? <p>Loading...</p> : <ImgItem url={img.url} name={img.title} />}

      <div className="btn-content">
        <button className="btn btn-primary" onClick={handleClick}>
          Like
        </button>
        <button className="btn btn-danger" onClick={handleClick}>
          Dislike
        </button>
      </div>
    </div>
  );
};

NyanRankApp.propTypes = {};

export { NyanRankApp };
