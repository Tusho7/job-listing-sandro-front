import React, { useEffect, useState } from "react";
import { Type } from "./Jobs";

function Job({ data }: { data: Type }) {
  let items: string[] = [
    data.role,
    data.level,
    ...data.languages,
    ...data.tools,
  ];

  const [icon, setIcon] = useState("");

  const importIcons = () => {
    import(`${data.logo}`).then((item) => {
      setIcon(item.default);
    });
  };

  useEffect(() => {
    importIcons();
  }, [data.logo]);

  return (
    <div>
      {data && (
        <div className="job-container">
          <div className="logo">
            <img src={icon} alt="" />
          </div>
          <div className="company-name">
            <p>{data.company}</p>

            <div>
              {data.new && <span className="new">NEW!</span>}
              {data.featured && <span className="featured">FEATURED</span>}
            </div>
          </div>
          <div className="position">{data.position}</div>
          <div className="days-time">
            <span>{data.postedAt}</span>
            <span>{data.contract}</span>
            <span>{data.location}</span>
          </div>
          <hr></hr>

          <div>
            {items.map((i) => {
              return <button>{i}</button>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Job;
