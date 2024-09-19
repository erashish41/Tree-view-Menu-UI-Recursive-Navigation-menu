import { menuData } from "./components/data";
import { TreeView } from "./components/TreeView";

const App = () => {
  return (
    <div>
      <TreeView menuData={menuData}/>
    </div>
  )
}

export default App;