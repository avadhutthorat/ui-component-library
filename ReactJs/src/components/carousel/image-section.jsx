const ImageSection = ({ currentShowingImage, autoModeHandler }) => {
  return (
    <div className="imagesection__container">
      <img
        src={currentShowingImage}
        alt="japan"
        className="imagesection--image"
        onMouseEnter={() => {
          autoModeHandler(false);
        }}
        onMouseLeave={() => {
          autoModeHandler(true);
        }}
      />
    </div>
  );
};

export default ImageSection;
