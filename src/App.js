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

  const nextPage = () => {
    setPage((oldpage) => {
      let newpage = 0;
      if (oldpage < data.length - 1) newpage = oldpage + 1;
      return newpage;
    });
  };

  const prevPage = () => {
    setPage((oldpage) => {
      let newpage = data.length - 1;
      if (oldpage > 0) newpage = oldpage - 1;
      return newpage;
    });
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
        <button className="next_Prev_Btn" onClick={() => prevPage()}>
          Prev
        </button>
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
        <button className="next_Prev_Btn" onClick={() => nextPage()}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
