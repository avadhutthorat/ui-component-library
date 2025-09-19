import { useEffect } from "react";

type imageListContentType = {
  id: number;
  download_url: string;
  author: string;
};

type ImageListPropsType = {
  imageList: imageListContentType[];
  setPageNo: (value: number | ((prev: number) => number)) => void;
  isLoading: boolean;
};

const ImageList = ({
  imageList = [],
  setPageNo,
  isLoading,
}: ImageListPropsType) => {
  console.log({ imageList });
  useEffect(() => {
    const target = document.querySelector(
      ".imglist_container > :nth-last-child(2)"
    );
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries?.[0]?.isIntersecting) {
        setPageNo((prev: number) => prev + 1);
        if (target) {
          observer.unobserve(target);
        }
      }
    });

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }

      observer.disconnect();
    };
  }, [imageList]);

  return (
    <div className="imglist_container">
      {imageList.map((image) => (
        <img
          key={image.id}
          src={image.download_url}
          alt={image.author}
          width="300px"
          height={"500px"}
          className="img_style"
        />
      ))}
      {isLoading && <div>Loading ...</div>}
    </div>
  );
};

export default ImageList;
