import './App.scss'
import Layout from "./components/Layout/index.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/home.jsx";
import About from "./components/About/about.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
