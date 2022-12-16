import { useEffect, useState } from "react";
import { DataTypes } from "./Jobs";

interface jobTypes {
  data: DataTypes;
  fillter: (a: string) => void;
}

function Job({ data, fillter }: jobTypes) {
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
    <div className="job-container">
      {data && (
        <>
          <div className="logo">
            <img src={icon} alt="" />
          </div>
          <div className="first-div">
            <div className="company-div">
              <span className="company-name">{data.company}</span>

              {data.new && <span className="new">NEW!</span>}
              {data.featured && <span className="featured">FEATURED</span>}
            </div>

            <div className="position">{data.position}</div>

            <div className="details">
              <span>{data.postedAt}</span>
              <span>&nbsp;•&nbsp;</span>
              <span>{data.contract}</span>
              <span>&nbsp;•&nbsp;</span>
              <span>{data.location}</span>
            </div>
          </div>

          <div className="second-div">
            {items.map((i) => {
              return <span onClick={() => fillter(i)}>{i}</span>;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Job;
