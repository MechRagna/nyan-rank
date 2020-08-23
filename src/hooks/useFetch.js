import { useState, useEffect } from "react";
import { getRandomCatGif } from "../services/getRandomCatGif";

export const useFetch = (count = 0) => {
  const [state, setState] = useState({ img: {}, loading: true });

  useEffect(() => {
    getRandomCatGif().then((img) => {
      setState({
        img: img,
        loading: false,
      });
    });
  }, [count]);

  return state;
};
