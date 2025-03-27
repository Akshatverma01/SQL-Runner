import React from "react";

const DataTable = ({ selectedQuery }) => {
  return (
    <div>
      <h3>Query Results:</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          marginTop:"20px"
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#007bff",
              color: "#fff",

            }}
          >
            {selectedQuery &&
              Object.keys(selectedQuery?.data[0])?.map((key) => (
                <th
                  key={key}
                  style={{
                    padding: "12px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRight: "1px solid #ddd",
                  }}
                >
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {selectedQuery &&
            selectedQuery?.data?.map((row, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#d6dde3",
                  transition: "background 0.3s ease",
                  color:"black"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#c1c3c5")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? "#f8f9fa" : "#d6dde3")
                }
              >
                {Object.values(row)?.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      padding: "12px",
                      borderBottom: "1px solid #ddd",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
