import { lazy, useMemo } from "react";

const GalleryItem = lazy(() => import("./GalleryItem/GalleryItem"));

import useFetchGallery from "./useFetchGallery";
import styles from "./Gallery.module.scss";

/**
 * A Gallery component that displays items from the API in a grid,
 * applying a filter based on the user's search query. It also
 * displays a loading indicator when more items are being fetched.
 *
 * @returns {JSX.Element} The Gallery component.
 */
const Gallery = () => {
  const { galleryItems, searchString, ref, hasMore, isLoading } = useFetchGallery();

  const filteredItems = useMemo(
    () =>
      galleryItems?.filter((item) =>
        item.name?.toLowerCase()?.includes(searchString?.toLowerCase()),
      ),
    [galleryItems, searchString],
  );

  return (
    <>
      <div className={styles.gallery}>
        {filteredItems.map((item, index) => (
          <GalleryItem key={index} item={item} />
        ))}
      </div>
      <div className={styles.loaderContainer} ref={ref}>
        {isLoading && hasMore && <p className={styles.loader}></p>}
      </div>
    </>
  );
};

export default Gallery;
