import React, { useState } from "react";
import { BarChart } from "./components/BarChart";
import { LineChart } from "./components/lineChart";
import { UserData } from "./Data";

const App = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <div>
      <div className="w-[900px]">
        <BarChart chartData={userData} />
      </div>
      <div className="w-[900px]">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
};

export default App;
