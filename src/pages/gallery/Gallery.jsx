import React from "react";
import { ImageViewer } from "react-image-viewer-dv";

const ImageGallery = () => {
  // Import all images from the specified directory dynamically
  const importImages = () => {
    const images = import.meta.glob(
      "../../../public/images/*.{png,jpg,jpeg,svg}"
    );
    return Object.entries(images).map(([path, image]) => ({ path, image }));
  };

  const images = importImages();

  return (
    <div className="grid grid-cols-3 gap-[1em] px-7 mobile:grid-cols-2 mobile:px-4 mobile:gap-[10px]">
      {images.map(({ path, image }, index) => {
        // const absolutePath = path.replace(/\.\.\//g, "");
        const absolutePath = path.replace(/^.*?public\//, "/");

        let img = `${absolutePath}`;
        console.log(img);

        return (
          <ImageViewer>
            <img src={img} alt={`image-${index}`} className="cursor-pointer" />
          </ImageViewer>
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
