import TabsRenderer from "./tabs";
import "./style.css";
import { useState } from "react";

const tabsData = [
  {
    label: "Product",
    content: (
      <div
        style={{
          backgroundColor: "cyan",
          height: "100%",
        }}
      >
        This is product
      </div>
    ),
  },
  {
    label: "Cart",
    content: <div>This is cart</div>,
  },
  {
    label: "About",
    content: <div>This is About</div>,
  },
  {
    label: "Contact",
    content: <div>This is Contact</div>,
  },
];

export default function Tabs(props) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="tabs__container">
      <div className="tabs__label__container">
        {tabsData.map((tab, index) => {
          return (
            <div
              className={`tab__btn ${index === currentTab ? "active" : ""}`}
              onClick={() => {
                setCurrentTab(index);
              }}
              key={index}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <hr />
      <div className="tab__content">{tabsData[currentTab].content}</div>
    </div>
  );
}
