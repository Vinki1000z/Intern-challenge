import React, {  useState,useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import Postedpost from "./Postedpost";
import { Routes, Route ,useLocation} from "react-router-dom";
import YourPost from "./YourPost";
import Search from "./Search";

export default function Dashboard() {
  const location = useLocation();
  const [showCard,setShowCard]=useState(true);
  // const setting=()=>{
  //   console.log("hit");
  //   if(location.pathname==="/search"){
  //         setShowCard(false);
  //       }else{
  //         setShowCard(true);
  //       }
  // }
  useEffect(()=>{
    if(location.pathname==="/search"){
      setShowCard(false);
    }else{
      setShowCard(true);
    }
  },[location.pathname])
  return (
    <>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        {/* Header */}
        <Header />
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            {/* Card  */}
           {showCard &&  <Card />} 
            <div className="card shadow border-0 mb-7">
              <Routes>
                {/* Post */}
                <Route path="/" element={<Postedpost/>} />
                {/* user own Post */}
                <Route path="/yourPost" element={<YourPost/>} />

                {/*  fro search  */}
                <Route path="/search" element={<Search />} />
                
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
