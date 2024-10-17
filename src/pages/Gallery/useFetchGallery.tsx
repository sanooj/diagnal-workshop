import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "src/application/App.context";
import { useGetDataQuery } from "src/hooks/dataFetchingHooks/useGetDataQuery";
import { Content } from "src/interfaces/Interfaces";

const useFetchGallery = () => {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: "20px" });
  const { setTitle, currentPage, setCurrentPage, searchString } = useAppContext();
  const { data, isSuccess, isLoading } = useGetDataQuery();
  const [galleryItems, setGalleryItems] = useState<Content[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setTitle(data?.page?.title!);
    setGalleryItems((prevItems) => [...prevItems, ...(data?.page["content-items"]?.content ?? [])]);
  }, [isSuccess]);

  // avoid multiple api calls (disabled onload inview load)
  window.addEventListener("scroll", () => {
    setInitialLoad(false);
  });

  useEffect(() => {
    if (inView && hasMore && !initialLoad && !isLoading) {
      const totalItems = Number(data?.page?.["total-content-items"]) ?? 0;
      const currentItems = galleryItems?.length ?? 0;
      if (currentItems >= totalItems) {
        setHasMore(false);
        return;
      }
      setCurrentPage(currentPage + 1);
    }
  }, [inView]);

  return {
    ref,
    hasMore,
    galleryItems,
    searchString,
    isLoading,
  };
};

export default useFetchGallery;
