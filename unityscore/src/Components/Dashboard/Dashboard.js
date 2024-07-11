import React from "react";
import Header from "./Header";
import Card from "./Card";
import Postedpost from "./Postedpost";
import { Routes, Route } from "react-router-dom";
import YourPost from "./YourPost";

export default function Dashboard() {
  return (
    <>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        {/* Header */}
        <Header />
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            {/* Card  */}
            <Card />
            <div className="card shadow border-0 mb-7">
              <Routes>
                {/* Post */}
                <Route path="/" element={<Postedpost />} />
                {/* user own Post */}
                <Route path="/yourPost" element={<YourPost />} />

              </Routes>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
