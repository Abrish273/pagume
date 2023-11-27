// import { useEffect, useState } from "react";
import "./App.css";
// import Translation from "./Translation/Data.json";

// function App() {
//   const [language, setLanguage] = useState("english");
//   const [content, setContent] = useState({});

//   useEffect(() => {
//     if (language === "english") {
//       setContent(Translation.english);
//     } else if (language === "amharic") {
//       setContent(Translation.amharic);
//     } else {
//       setContent(Translation.english);
//     }
//   }, [language]);
//   return (
//     <div>
//       <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option>english</option>
//         <option>amharic</option>
//       </select>
//       <h1>{content.Title}</h1>
//       <p>{content.Description}</p>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import OurCauses from "./pages/OurCauses";
import Galleryport from "./pages/Gallery";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/gallery" element={<Galleryport />} />
        <Route path="/ourcauses" element={<OurCauses />} />
      </Route>
    </Routes>
  );
};

export default App;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLanguage, selectLanguage } from './features/LanguageSlice ';
// import Translation from './Translation/Data.json';

// function App() {
//   const dispatch = useDispatch();
//   const language = useSelector(selectLanguage);
//   const content = Translation[language];

//   useEffect(() => {
//     // Do any other side effects related to language change here
//   }, [language]);

//   return (
//     <div>
//       <select value={language} onChange={(e) => dispatch(setLanguage(e.target.value))}>
//         <option value="english">English</option>
//         <option value="amharic">Amharic</option>
//       </select>
//       <h1>{content.Title}</h1>
//       <p>{content.Description}</p>
//     </div>
//   );
// }

// export default App;
