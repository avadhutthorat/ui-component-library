import Tooltip from "./index";

const TooltipStory = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "100px",
      }}
    >
      <Tooltip content="This is tooltip text">
        <button className="btn"> Hover over </button>
      </Tooltip>
    </div>
  );
};

export default TooltipStory;
