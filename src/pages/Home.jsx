import React, { useEffect, useState } from "react";
import QueryEditor from "../components/QueryEditor";
import DataTable from "../components/DataTable.jsx";
import QuerySelector from "../components/QuerySelector";
import predefinedQueries from "../data/queries.js";
import "./Home.css";

const Home = () => {
  const [selectedQuery, setSelectedQuery] = React.useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [customQuery, setCustomQuery] = useState("");
  const [displayResult, setDisplayResult] = useState("");

  useEffect(() => {
    setDisplayResult(selectedQuery);
  }, [selectedQuery]);

  const RunQuery = (id) => {
    id = id === 10 ? 1 : id;
    const query = predefinedQueries[id];
    setDisplayResult(query);
  };

  return (
    <>
      <div className={darkMode ? "container dark" : "container"}>
        <header>
          <h1>SQL Query Runner</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main>
          <div className=" main-content">
            <div className="left">
              <div style={{ marginBottom: "10px" }}>
                {/* Dropdown for predefined queries */}
                <label>Select a Predefined Query:</label>
                <br />
                <QuerySelector
                  queries={predefinedQueries}
                  selectedQuery={selectedQuery}
                  setSelectedQuery={setSelectedQuery}
                />
              </div>

              <div>
                <label>Current Query:</label>
                {/* Readonly textara to read the query and syntax */}
                <textarea
                  value={selectedQuery?.query}
                  readOnly
                  style={{
                    minHeight: "150px",
                    maxHeight: "100%",
                    width: "100%%",
                    maxWidth: "90%",
                    minWidth: "90%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "lightGray",
                    marginTop: "20px",
                  }}
                  rows={3}
                />
              </div>

              {/* Custom Query Input */}
              <div>
                <label>Or Enter Custom Query:</label>
                {/* Implemented Code Mirror editor for taking imput from user.*/}
                {/* The user will write some sqk query and trigger the Run Query for some id from predefined queries.*/}
                <QueryEditor
                  theme={darkMode}
                  customQuery={customQuery}
                  setCustomQuery={setCustomQuery}
                  selectedQuery={selectedQuery}
                />
              </div>
              {customQuery && (
                <button
                  onClick={() => RunQuery(selectedQuery?.id)}
                  className="run-query-button"
                >
                  Run Query
                </button>
              )}
            </div>
            {/* Results Display */}
            <div className="right">
              <DataTable selectedQuery={displayResult} />
            </div>
          </div>
        </main>
      </div>
      <footer className="footer">
        <p>SQL Query Runner - © 2023</p>
        <p>
          <a
            href="https://github.com/Akshatverma01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/akshat-verma-2b6106228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://leetcode.com/u/akshat0104verma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;
