import { List } from "react-window";

const Row = ({ index, style }) => {
  return <div style={style}>Row {index}</div>;
};
export default function VirtualizationReactWindow() {
  const listData = Array.from({ length: 1000 }).map((_, i) => i);
  return (
    <List
      rowComponent={Row}
      rowCount={1000}
      rowHeight={35}
      rowProps={{ listData }}
      height={400}
    />
  );
}
