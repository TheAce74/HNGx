import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useState } from "react";

export default function FavButton() {
  const [favorite, setFavorite] = useState(false);

  return (
    <button
      className="heart"
      aria-label="add to favorites"
      onClick={() => setFavorite(!favorite)}
    >
      {favorite ? <FaHeart className="fav" /> : <FaRegHeart />}
    </button>
  );
}
