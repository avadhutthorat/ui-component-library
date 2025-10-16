export default function TabsRenderer({ tabsData }) {
  return (
    <div className="tabs__label__container">
      {tabsData.map((tab) => {
        return (
          <button className="tab__btn" onClick={() => {}}>
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
