import React, { useEffect, useState } from "react";
import paginate from "./utility";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getFollowers = async () => {
    const response = await fetch(url);
    const result = await response.json();

    setData(paginate(result));
    setLoading(false);
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return { data, loading };
};

export default useFetch;
