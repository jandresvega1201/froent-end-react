import {UseState} from "./components/UseState";
//import {ClassState} from "./components/ClassState";
import {UseReducer} from "./components/UseReducer";

function App() {
  return (
    <div className="App">
        <UseState name="UseState"/>
        <UseReducer name="use reducer" />
      {/*<ClassState name="ClassState"/>*/}
    </div>
  );
}

export default App;
