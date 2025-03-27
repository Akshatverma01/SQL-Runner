import React, { useEffect, useState } from "react";
import QueryEditor from "../components/QueryEditor";
import DataTable from "../components/DataTable.jsx";
import QuerySelector from "../components/QuerySelector";
import predefinedQueries from "../data/queries.js";
import "./Home.css"; // Import CSS for dark mode

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
    <div className={darkMode ? "container dark" : "container"}>
      {/* Header with Dark Mode Toggle */}
      <header>
        <h1>SQL Query Runner</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <div className=" main-content">
        {/* Predefined Query Dropdown */}
        <div className="left">
          <div style={{ marginBottom: "10px" }}>
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
            <QueryEditor
              theme={darkMode}
              query={customQuery}
              setCustomQuery={setCustomQuery}
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
        <div className="right">
          {/* Results Display */}
          <DataTable selectedQuery={displayResult} />
        </div>
      </div>
    </div>
  );
};

export default Home;
