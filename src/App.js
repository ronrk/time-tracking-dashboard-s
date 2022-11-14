import React, { useState } from "react";
import UserBox from "./components/UserBox";
import DataBox from "./components/DataBox";
import data from "./data.json";

const App = () => {
  const [time, setTime] = useState("daily");

  return (
    <main>
      <UserBox />
      <div className="data-container">
        {data.map((item) => (
          <DataBox key={item.title} {...item} time={time} />
        ))}
      </div>
    </main>
  );
};

export default App;
