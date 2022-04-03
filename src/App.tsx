import React from "react";
import logo from "./logo.svg";

import { observer } from "mobx-react-lite";
import FridgeScreen from "./screens/FridgeScreen";

const App: React.FC = observer(() => {
  return (
    <div className="app">
      <FridgeScreen />
    </div>
  );
});

export default App;
