import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          {[
            "business",
            "entertainment",
            "general",
            "health",
            "science",
            "sports",
            "technology",
          ].map((category) => (
            <Route
              key={category}
              path={`/${category}`}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key={category}
                  pageSize={pageSize}
                  country="us"
                  category={category}
                />
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
