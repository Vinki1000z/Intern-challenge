import React ,{useContext}from "react";
import Header from "./Header";
import Card from "./Card";
import AllPost from "./AllPost";
import { Routes, Route } from "react-router-dom";
import UserPost from "./UserPost";
import Profile from "./Profile";

import HideCardContext from "../../createcontext/HideCardContext/HideCardContext";

export default function Dashboard() {
  const { showCard } = useContext(HideCardContext);
  return (
    <>
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        {/* Header */}
        <Header />
        <main className="py-6 bg-surface-secondary">
          <div className="container-fluid">
            {/* Card  */}
            {showCard && <Card />}
            <div className="card shadow border-0 mb-7">
              <Routes>
                {/* Post */}
                <Route path="/" element={<AllPost />} />
                {/* user own Post */}
                <Route path="/yourPost" element={<UserPost />} />

                {/*  fro profile  */}
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
