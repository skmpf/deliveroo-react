import React, { useState, useEffect } from "react";
import axios from "axios";
import "./components/css/reset.css";
import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-2003.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <div>Loading page</div>
      ) : (
        <>
          <Header data={data} />
          <Content categories={data.categories} />
        </>
      )}
    </>
  );
}

export default App;
