import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
const QueryEditor = ({ customQuery, setCustomQuery ,theme }) => {
    console.log(customQuery)
  return (
    <CodeMirror
      value={customQuery}
      onChange={(value)=>setCustomQuery(value)}
      minHeight="400px"
      width="95%"
      theme={theme ? vscodeLight : oneDark}
      extensions={[sql(), EditorView.lineWrapping]}
      style={{
        wordWrap: "break-word",
        overflow: "auto",
        marginTop: "20px",
      }}
    />
  );
};

export default QueryEditor;
