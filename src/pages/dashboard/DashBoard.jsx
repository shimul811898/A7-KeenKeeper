import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { KeeperContext } from "../../context/KeeperContext";

const DashBoard = () => {
    const { callList, textList, videoList } = useContext(KeeperContext);


    const checkin = [...callList, ...textList, ...videoList,];


    const data = [
        { name: "Call", value: callList.length, fill: "#244D3F" },
        { name: "Text", value: textList.length, fill: "#7E35E1" },
        { name: "Video", value: videoList.length, fill: "#37A163" },
    ];

    return (
        <div className="max-w-6xl mx-auto p-10 bg-[#F8FAFC] rounded-lg">
            {checkin.length === 0 ? (
                <div className="bg-red-500 text-black text-center py-5 rounded-xl text-2xl font-bold">
                    No Call/Text/Video data yet
                </div>
            ) : (
                <div>
                    <div>
                        <h1 className="text-4xl pt-5 text-black font-bold text-start">Friendship Analytics</h1>
                    </div>
                    <div className="my-5 shadow-lg max-w-6xl mx-auto rounded-md border border-slate-300 p-10">
                        <h2 className="text-2xl text-[#244D3F] font-bold text-start">By Interaction Type</h2>

                        <PieChart
                            style={{ width: '100%', maxWidth: '400px', margin: "auto", maxHeight: '60vh', aspectRatio: 1 }} responsive>

                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius="80%"
                                outerRadius="100%"
                                paddingAngle={5}
                                cornerRadius="50%"
                                fill="#8884d8"
                            />

                            <Tooltip />

                            <Legend
                                wrapperStyle={{ paddingTop: "20px" }} />
                        </PieChart >
                    </div>
                </div>
            )};
        </div>
    );
};

export default DashBoard;