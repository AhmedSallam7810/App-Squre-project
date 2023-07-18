import { FileBasedProvider } from "react-router-filebased";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <FileBasedProvider />
    </>
  );
}
export default App;
