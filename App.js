import React from "react";
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi";

// Components Import
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

function App() {
  return ( 
    <AppContext>
     <BrowserRouter>
     <div className="flex flex-col h-full">
       <Header/>
           <Routes>
               <Route path="/" exact element={<Feed />} />
               <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
               <Route path="/video/:id" element={<VideoDetails />} />
           </Routes>
     </div>
     </BrowserRouter>
    </AppContext>    
  );
}

export default App;
