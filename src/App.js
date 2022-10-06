import Home from "./routes/Home";
import Detail from "./components/Detail";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/hello" element={<h1>Hello</h1>} />
     </Routes> 
  );
}

export default App;
