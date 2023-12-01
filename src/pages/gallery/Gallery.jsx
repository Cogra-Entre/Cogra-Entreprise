import React from "react";
const ImageGallery = () => {
  // Import all images from the specified directory dynamically
  const importImages = () => {
    const images = import.meta.glob(
      "./../../assets/images/*.{png,jpg,jpeg,svg}"
    );
    return Object.entries(images).map(([path, image]) => ({ path, image }));
  };

  const images = importImages();

  return (
    <div className="grid grid-cols-3 gap-[1em] px-7 mobile:grid-cols-2 mobile:px-4 mobile:gap-[10px]">
      {images.map(({ path, image }, index) => {
        let img;
        const convertRelativePath = (path) => {
          const absolutePath = path.replace(/\.\.\//g, "");
          // Normalize slashes if needed

          img = `/src/${absolutePath}`;
        };

        // Example usage:
        convertRelativePath(path);

        return (
          <img
            key={index}
            src={img}
            alt={`image-${index}`}
            className="cursor-pointer"

          />
        );
      })}
    </div>
  );
};
import Footer from "../../components/footer/footer";

export default function Gallery() {
  return (
    <div className="mt-[17em]">
      <ImageGallery />
      <Footer />
    </div>
  );
}
