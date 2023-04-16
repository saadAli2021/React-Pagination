import logo from "./logo.svg";
import "./App.css";
import useFetch from "./useFetch";
import Follower from "./Follower";
import { useEffect, useState } from "react";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const pageChange = (index) => {
    setPage(index);
  };

  return (
    <div className="App">
      <h3>Pagination Demo</h3>
      <div className="followersContainer">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </div>
      <div className="btnContainer">
        {data.map((_, index) => {
          return (
            <button
              className={`${index === page ? "activeBtn" : null}`}
              onClick={() => pageChange(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
