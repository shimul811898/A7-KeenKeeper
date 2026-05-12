import React, { useContext } from "react";
import { KeeperContext } from "../../context/KeeperContext";

const Keeper = () => {
  const keeper = useContext(KeeperContext);

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h2 className="text-2xl font-bold mb-6 text-[#244D3F]">
        Contact Timeline
      </h2>

      {keeper.callList.length === 0 ? (
        <p className="text-gray-500 italic text-center py-10 bg-gray-50 rounded-lg">
          Emty
        </p>
      ) : (
        <div className="space-y-4">
          {keeper.callList.map((item) => (
            <div>
            </div>
  
          ))}
        </div>
      )}
    </div>
  );
};

export default Keeper;