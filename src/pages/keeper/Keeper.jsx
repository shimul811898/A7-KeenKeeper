import React, { useContext, useState } from "react";
import { KeeperContext } from "../../context/KeeperContext";

import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoIosText } from "react-icons/io";

const Keeper = () => {
  const { callList, textList, videoList } = useContext(KeeperContext);


  const checkin = [...callList, ...textList, ...videoList,];

  const [filter, setFilter] = useState("all");


  const filteredCheckins =
    filter === "all"
      ? checkin
      : checkin.filter(
        (item) => item.type === filter
      );

  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8"> Timeline</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="select select-bordered max-w-xs w-full mb-8"
      >
        <option value="all">All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>


      {filteredCheckins.length === 0 ? (
        <div className="bg-red-500 text-white text-center py-5 rounded-xl text-2xl font-bold">
          No check-in found
        </div>
      ) : (
        <div className="space-y-5">
          {filteredCheckins.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] shadow-sm rounded-lg p-5 flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full flex items-center justify-center text-4xl">
                  {item.type === "call" && <IoCall />}

                  {item.type === "text" && (
                    <IoIosText />
                  )}

                  {item.type === "video" && (
                    <FaVideo />
                  )}
                </div>


                <div>
                  <h2 class="text-[#64748B] text-[18px] font-bold">
                    <span className="text-xl  text-black">{capitalize(item.type)}</span> {" "}{item.name}
                  </h2>

                  <p className="text-gray-500">
                    {item.next_due_date}

                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Keeper; 