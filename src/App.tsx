import { useState } from "react";
import { DataTypes } from "../src/components/Jobs";
import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  const [filter, setFilter] = useState<string[]>([]);

  const filterJobs = (data: string) => {
    if (!filter.includes(data)) {
      setFilter([...filter, data]);
    }
  };

  const deleteJobs = (data: string) => {
    const newJobs = filter.filter((key) => key != data);
    setFilter(newJobs);
  };

  const clearAllJobs = () => {
    setFilter([]);
  };

  return (
    <div className="App">
      <div className="header"></div>
      {filter.length > 0 && (
        <Header
          fltr={filter}
          removeJobs={deleteJobs}
          clearJobs={clearAllJobs}
        />
      )}
      <Jobs fillter={filterJobs} filterJobs={filter} />
    </div>
  );
}

export default App;
