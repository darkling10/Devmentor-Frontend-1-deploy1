import React from "react";
import { Header } from "../components/Header";
import Card from '../components/Card'

function Dashboard() {
  
  
  
  return (
    <div className="bg-blue-50 w-full min-h-screen">
      <Header />
     <div className="w-[75%] mx-auto">
      
     <h1 className="font-inter my-5 font-semibold text-2xl">Top Technical Courses </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2.5 grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      </div>

     </div>
    </div>
  );
}

export default Dashboard;
