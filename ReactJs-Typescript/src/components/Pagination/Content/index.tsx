const Content = ({ data }) => {
  return (
    <div>
      {data &&
        data?.map((imgData) => (
          <img
            className="img"
            src={imgData.download_url}
            alt="img"
            key={imgData.id}
          />
        ))}
    </div>
  );
};

export default Content;
