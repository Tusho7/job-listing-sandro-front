import React, { useEffect, useState } from "react";
import axios from "axios";
import Job from "./Job";

export interface Type {
  map: any;
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

function Jobs() {
  const [data, setData] = useState<Type[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/api/listings");
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <div>
      {data.map((object) => {
        return <Job data={object} />;
      })}
    </div>
  );
}

export default Jobs;
