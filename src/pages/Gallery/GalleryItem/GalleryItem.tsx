import { Content } from "src/interfaces/Interfaces";
import { useInView } from "react-intersection-observer";

import poster from "src/assets/images/placeholder-poster.png";
import styles from "./GalleryItem.module.scss";

const GalleryItem = ({ item }: { item: Content }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "15px",
  });

  const getImageUrl = () => {
    if (!item["poster-image"]) return poster;
    return `${import.meta.env.VITE_IMAGE_URL}/${item["poster-image"]}`;
  };

  return (
    <figure className={styles.galleryItem} ref={ref}>
      {inView ? (
        <>
          <img
            src={getImageUrl()}
            alt={item.name}
            loading='lazy'
            onError={(e) => {
              (e.target as HTMLImageElement).src = poster;
            }}
          />
          <figcaption>{item.name}</figcaption>
        </>
      ) : (
        <>
          <img src={poster} alt='Loading...' loading='lazy' />
          <figcaption>
            <div className={styles.loader}></div>
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default GalleryItem;
