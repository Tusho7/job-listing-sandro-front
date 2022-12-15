import React, { useEffect, useState } from "react";
import axios from "axios";
import Job from "./Job";

export interface DataTypes {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface functionType {
  fillter: (a: string) => void;
  filterJobs: string[];
}

function Jobs({ fillter, filterJobs }: functionType) {
  const [data, setData] = useState<DataTypes[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/api/listings");
      setData(res.data);
    };
    getData();
  }, []);

  const [filterData, setfilterData] = useState<DataTypes[]>([]);

  const changedData = () => {
    if (filterJobs.length > 0) {
      const newData = filterData.filter((d) => {
        return filterJobs.every((key) => {
          return (
            d.role == key ||
            d.level == key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setfilterData(newData);
    } else {
      setfilterData(data);
    }
  };

  useEffect(() => {
    changedData();
  }, [data, filterJobs]);

  return (
    <div className="jobs">
      {filterData.map((object) => {
        return <Job data={object} fillter={fillter} />;
      })}
    </div>
  );
}

export default Jobs;
