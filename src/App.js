import React, { useState } from "react";
import UserBox from "./components/UserBox";
import DataBox from "./components/DataBox";
import data from "./data.json";

const App = () => {
  const [time, setTime] = useState("daily");

  const onChangeTime = (e) => {
    setTime(e.target.innerHTML.toLowerCase());
  };

  return (
    <main>
      <UserBox onChange={onChangeTime} time={time} />
      <div className="data-container">
        {data.map((item) => (
          <DataBox key={item.title} {...item} time={time} />
        ))}
      </div>
    </main>
  );
};

export default App;
