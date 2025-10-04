import "./App.css";
import ReduxCounter from "./features/redux-test";
import ReduxToolkitCounter from "./features/redux-toolkit";

function App() {
  return (
    <div>
      <div>
        {/* <h3>Plain Redux</h3>
        <ReduxCounter /> */}
      </div>
      <div>
        <h3>Redux Toolkit</h3>
        <ReduxToolkitCounter />
      </div>
    </div>
  );
}

export default App;
