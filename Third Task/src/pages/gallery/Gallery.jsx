import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabase/supabase";
import { useAuthentication } from "../../hooks/useAuthentication";
import Image from "./components/Image";
import { useFetch } from "../../hooks/useFetch";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd-grid-support";
import { v4 as uuidv4 } from "uuid";

function Gallery() {
  const { setUser, setLoader, user } = useAppContext();
  const navigate = useNavigate();
  const { logout } = useAuthentication();
  const { get } = useFetch();
  const [images, setImages] = useState({
    data: [],
    filter: "",
  });
  const amount = useRef(9);

  const getImages = async () => {
    const response = await get(
      `https://picsum.photos/v2/list?limit=${amount.current}`
    );
    if (response.success) {
      setImages((prevImages) => {
        return {
          ...prevImages,
          data: response.data,
        };
      });
    }
  };

  const handleInput = (e) => {
    setImages((prevImages) => {
      return {
        ...prevImages,
        filter: e.target.value,
      };
    });
  };

  const handleClick = async () => {
    const MAX = 1084;
    const num = amount.current + 9;
    if (images.data.length < MAX) {
      const response = await get(`https://picsum.photos/v2/list?limit=${num}`);
      if (response.success) {
        setImages((prevImages) => {
          return {
            ...prevImages,
            data: response.data,
          };
        });
        amount.current = num;
      }
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let data;
    if (source.index < destination.index) {
      data = [
        ...images.data.slice(0, source.index),
        ...images.data.slice(source.index + 1, destination.index + 1),
        ...images.data.slice(source.index, source.index + 1),
        ...images.data.slice(destination.index + 1),
      ];
    } else {
      data = [
        ...images.data.slice(0, destination.index),
        ...images.data.slice(source.index, source.index + 1),
        ...images.data.slice(destination.index, source.index),
        ...images.data.slice(source.index + 1),
      ];
    }
    setImages((prevImages) => {
      return {
        ...prevImages,
        data: data,
      };
    });
  };

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        setUser(data.session);
        setLoader(false);
      } else {
        navigate("/");
      }
    };
    getSession();

    return () => {
      getImages();
    };
  }, []);

  return (
    <motion.section
      className="gallery container-xl p-md-4 p-3"
      key="gallery"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div className="user">
            <span aria-hidden="true">
              {user?.user?.user_metadata?.username
                ?.split("_")[0][0]
                ?.toUpperCase()}
            </span>
          </div>
          <h2 className="fs-4 mb-0">
            {user?.user?.user_metadata?.username
              ?.split("_")
              ?.map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
              ?.join(" ")}
          </h2>
        </div>
        <Button onClick={logout}>Log out</Button>
      </div>
      <h1 className="mt-4 mb-3">Gallery</h1>
      <p>
        Explore the fascinating world of visual storytelling like never before.
        PicPuzzle is your canvas to transform ordinary images into extraordinary
        stories. With our intuitive and user-friendly dashboard, you have the
        power to view, and rearrange captivating image narratives effortlessly.
      </p>
      <input
        type="text"
        placeholder="Filter By Author"
        onInput={handleInput}
        className="w-100 d-block p-2 mt-2 mb-4 border-2 rounded-2"
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={uuidv4()}>
          {(provided) => (
            <ul
              className="image position-relative mx-auto"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {images.data.map(({ id, download_url, author }, index) =>
                author
                  ?.toLowerCase()
                  ?.startsWith(images.filter.toLowerCase()) ? (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <Image
                        url={download_url}
                        author={author}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                      />
                    )}
                  </Draggable>
                ) : null
              )}
              {images.data.filter(({ author }) =>
                author?.toLowerCase()?.includes(images.filter.toLowerCase())
              ).length === 0 ? (
                <p className="position-absolute top-50 start-50 translate-middle fw-bold fs-4">
                  Nothing to see here
                </p>
              ) : null}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      {images.filter === "" ? (
        <Button onClick={handleClick} className="mt-3">
          See more
        </Button>
      ) : null}
    </motion.section>
  );
}
export default Gallery;
