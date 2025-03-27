import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import { useEffect } from "react";
import predefinedQueries from "../data/queries.js";

const QueryEditor = ({ selectedQuery,customQuery, setCustomQuery, theme }) => {

    useEffect(() => {
        const query = predefinedQueries[selectedQuery?.id];
        setCustomQuery(query?.query)
      }, [selectedQuery]);

    console.log(selectedQuery,customQuery,"editor")
  return (
    <CodeMirror
      value={customQuery}
      onChange={(value) => setCustomQuery(value)}
      minHeight="400px"
      width="95%"
      theme={theme ? vscodeLight : oneDark}
      extensions={[sql(), EditorView.lineWrapping]}
      style={{
        wordWrap: "break-word",
        overflow: "auto",
        marginTop: "20px",
        fontSize: "14px",
      }}
    />
  );
};

export default QueryEditor;
