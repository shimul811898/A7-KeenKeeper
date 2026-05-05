import React from "react";

const Banner = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <div className="text-center space-y-3 py-15">
                <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="btn bg-[#244D3F] mt-7 text-white px-3 py-2"><span className="text-[20px] pr-[3px] pb-[2px] text-[#F8FAFC]">+</span>Add a Friend</button>
            </div>
            <div className="max-w-6xl grid grid-cols-4 mx-auto gap-10 justify-center items-center">
                <div className="text-center bg-white shadow-lg py-10 space-y-2">
                    <h1 className="text-3xl font-bold">12</h1>
                    <p className="text-[#64748B] text-[16px] font-semibold">Total Friends</p>
                </div>
                <div className="text-center bg-white shadow-lg  py-10 space-y-2">
                    <h1 className="text-3xl font-bold">5</h1>
                    <p className="text-[#64748B] text-[16px] font-semibold">On Track</p>
                </div>
                <div className="text-center bg-white shadow-lg  py-10 space-y-2">
                    <h1 className="text-3xl font-bold">7</h1>
                    <p className="text-[#64748B] text-[16px] font-semibold">Need Attention</p>
                </div>
                <div className="text-center bg-white shadow-lg py-10 space-y-2">
                    <h1 className="text-3xl font-bold">6</h1>
                    <p className="text-[#64748B] text-[16px] font-semibold">Interactions This Month</p>
                </div>
            </div>
        </div>
    )

}

export default Banner;