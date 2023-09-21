import { useEffect, useRef, useState } from "react";
import Spinner from "../../../components/ui/Spinner";

export default function Image({
  url,
  author,
  innerRef,
  isDragging,
  ...otherProps
}) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (imageRef.current.complete) {
        setLoading(false);
        clearInterval(timer);
      }
    }, 3000);
  }, []);

  return (
    <li ref={innerRef} {...otherProps}>
      {loading && <Spinner />}
      <div className={loading ? "a hide" : "a"}>
        <figure>
          <img
            src={url}
            alt={author}
            ref={imageRef}
            className={isDragging ? "drag" : ""}
          />
          <figcaption>{author}</figcaption>
        </figure>
      </div>
    </li>
  );
}
