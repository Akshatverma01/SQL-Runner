import React, { useEffect } from "react";

const QuerySelector = ({ queries, selectedQuery, setSelectedQuery }) => {
  useEffect(() => {
    setSelectedQuery(queries[0]);
  }, []);
  return (
    <select
    value={selectedQuery?.id}
    onChange={(e) => {
      const query = queries?.find(
        (query) => query?.id === Number(e.target.value)
      );
      setSelectedQuery(query);
    }}
    style={{
      width: "60%",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      fontWeight: "500",
      backgroundColor: "#fff",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      outline: "none",
      marginTop:"20px"
    }}
    onMouseEnter={(e) => (e.target.style.borderColor = "#007bff")}
    onMouseLeave={(e) => (e.target.style.borderColor = "#ccc")}
    onFocus={(e) => (e.target.style.borderColor = "#007bff")}
    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
  >
    {queries.map((q, index) => (
      <option
        key={index}
        value={q?.id}
        style={{
          backgroundColor: "#fff",
          color: "#333",
          fontSize: "1rem",
          padding: "10px",
        }}
      >
        {q?.name}
      </option>
    ))}
  </select>
  
  );
};

export default QuerySelector;
