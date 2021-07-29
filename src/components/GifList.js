import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifList = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">"Cargando..."</p>}

      <div className="card-grid">
        {images.map((item) => {
          return <GifGridItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default GifList;
