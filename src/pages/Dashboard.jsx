import React from "react";
import { Header } from "../components/Header";
import cardRectangle from "../assets/Images/card_rectangle.svg";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div className="bg-blue-50">
      <Header />
      <div className="bg-blue-50  gap-10 w-auto mx-10 flex flex-col justify-start">
        <div className="h-64 w-full mt-16">
          <div className="rectangle_image rounded-xl ">
            <div className="flex flex-row items-center justify-between h-full mx-20 gap-16">
              <div className="w-auto flex flex-col gap-5">
                <p className="text-[3rem] text-white font-semibold break-normal ">
                  Take The Courses Which Are Worth Paying . . . .
                </p>
                <div className="text-2xl text-white ">
                  Our Team of expert’s have choosed a right amount of courses
                  you need to master a topic and begin your Engineering Journey.
                  <p>
                    No need to waste your time by looking up on google to search
                    the SO CALLED BEST COURSES ...
                  </p>
                </div>
              </div>
              <div className="px-10 py-5 bg-blue-600 rounded-xl text-white text-xl">
                View Courses
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-[2rem] font-semibold">Recently Added Courses</p>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-[2rem] font-semibold">Recently Added Interview Experiences</p>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
