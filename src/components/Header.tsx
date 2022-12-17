import x from "./images/icon-remove.svg";

interface jobTypes {
  fltr: any;
  removeJobs: (a: string) => void;
  clearJobs: (a: string) => void;
}

function Header({ fltr, removeJobs, clearJobs }: jobTypes) {
  return (
    <div className="header-main-container">
      <ul>
        {fltr.map((i: any) => {
          return (
            <li>
              {i}
              <button className="close-button" onClick={() => removeJobs(i)}>
                <img src={x} alt="" />
              </button>
            </li>
          );
        })}
        <a className="clear" href="#" onClick={() => clearJobs("")}>
          Clear
        </a>
      </ul>
    </div>
  );
}

export default Header;
