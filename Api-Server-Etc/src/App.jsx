import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
//pages
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import News from "./assets/pages/News";
import Contact from "./assets/pages/Contact";
import PageNotFound from "./assets/pages/PageNotFound";
import Layout from "./layout/Layout";
import Users from "./assets/pages/jsonplaceholder/Users";
import Posts from "./assets/pages/jsonplaceholder/Posts";
import PostDetail from "./assets/pages/jsonplaceholder/PostDetail";
import Todos from "./assets/pages/jsonplaceholder/Todos";
import Starships from "./assets/pages/swapi/Starships";
import Everything from "./assets/pages/newsapi/Everything";
import EverythingDetails from "./assets/pages/newsapi/EverythingDetails";
import TopHeadlines from "./assets/pages/newsapi/TopHeadlines";
import OpenWeather1 from "./assets/pages/weather/OpenWeather1";
import OpenWeather2 from "./assets/pages/weather/OpenWeather2";
import OpenWeather3 from "./assets/pages/weather/OpenWeather3";
import GetWorld from "./assets/pages/getworld/GetWorld";
import Building from "./assets/pages/buildings/Building";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Outlets til layout-component */}
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            {/* jsonplaceholder */}
            <Route path="users" element={<Users />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="Posts" element={<Posts />}></Route>
            <Route path="Postdetail/:postId" element={<PostDetail />}></Route>
            <Route path="Todos" element={<Todos />}></Route>
            <Route path="/starships" element={<Starships />}></Route>
            {/* NewsAPI */}
            <Route path="nyheder" element={<Everything />}></Route>
            <Route path="everythingdetails" element={<EverythingDetails/>}></Route>
            <Route path="topheadlines" element={<TopHeadlines />}></Route>
            <Route path="openweather1" element={<OpenWeather1 />}></Route>
            <Route path="openweather2" element={<OpenWeather2 />}></Route>
            <Route path="openweather3" element={<OpenWeather3 />}></Route>
            <Route path="getworld" element={<GetWorld />}></Route>
            <Route path="building" element={<Building />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
