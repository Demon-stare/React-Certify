import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import People from "./People";
import About from "./About";

export default function Homeeo() {

    return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<People />} />
          <Route path="About" element={<About />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}