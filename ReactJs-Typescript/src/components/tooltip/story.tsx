import Tooltip from "./index";
import TooltipReactPortal from "./tooltip-reactportal";

const TooltipStory = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "100px",
      }}
    >
      {/* <Tooltip content="This is tooltip text">
        <button className="btn"> Hover over </button>
        </Tooltip> */}
      <TooltipReactPortal tooltipText="This is tooltip text">
        <button className="btn"> Hover over </button>
      </TooltipReactPortal>
    </div>
  );
};

export default TooltipStory;
