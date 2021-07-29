import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category)
      .then((gifs) => {
        setState({
          data: gifs,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        setState({
          ...state,
          loading: false,
        });
      });
  }, [category, state]);

  return state;
};
