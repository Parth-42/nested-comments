import "./App.css";
import CommentSection from "./components/CommentSection/CommentSection";
import comments from "./data/comments.json";

function App() {
  return (
    <div style={{ padding: "24px 48px" }}>
      <h2 style={{ paddingBottom: "12px" }}>Comments</h2>
      <CommentSection comments={comments} />
    </div>
  );
}

export default App;
