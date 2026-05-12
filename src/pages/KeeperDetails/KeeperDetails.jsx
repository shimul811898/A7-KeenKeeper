import React, { useContext, useState } from "react";
import { BsChatSquareText } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArchive } from "react-icons/io";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import { KeeperContext } from "../../context/KeeperContext";



const KeeperDetails = () => {
    const { id: keeperParamsId } = useParams();

    const keeper = useLoaderData();

    const expectedKeeper = keeper.find(
        (friend) => friend.id === Number(keeperParamsId)
    );


    const {
        id,
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
        preferred_contact,
    } = expectedKeeper;

     const { handleCall, handleText,handleVideo } = useContext(KeeperContext);



    return (
        <div className=" flex mx-auto gap-10 justify-center py-20">
            <div className="">
                <div className="text-center  space-y-3 transition duration-200 ">
                    <div className="card shadow-sm px-10 py-5">

                        <div className="flex justify-center">
                            <img
                                className="rounded-full"
                                src={picture}
                                alt={name}
                            />
                        </div>

                        <h1 className="text-2xl font-bold">{name}</h1>

                        <p className="text-[16px]">{days_since_contact}d ago</p>

                        <div className="mx-auto flex gap-3 py-3">
                            {tags.map((tag, ind) => (
                                <span
                                    key={ind}
                                    className="rounded-full bg-[#CBFADB] px-4 py-1 text-[#244D3F]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div>
                            <span
                                className={`rounded-full px-4 py-2 text-white ${status === "overdue"
                                        ? "bg-[#EF4444]"
                                        : status === "on-track"
                                            ? "bg-[#244D3F]"
                                            : "bg-[#EFAD44]"
                                    }`}
                            >
                                {status}
                            </span>
                        </div>

                        <p className="text-[#64748B] text-[16px] font-semibold pt-2">
                            {bio}
                        </p>

                        <p className="text-[#64748B] text-[12px] font-semibold">
                            preferred:{preferred_contact}
                        </p>

                    </div>
                </div>

                <div className="grid gap-3 mt-4">
                    <div className="p-4 cursor-pointer shadow-lg text-center border border-[#62738280] rounded-md ">
                        <h3 className="text-[#1F2937] font-medium flex items-center justify-center gap-2">
                            <RiNotificationSnoozeLine /> Snooze 2 weeks
                        </h3>
                    </div>

                    <div className="p-4 cursor-pointer border border-[#62738280] shadow-lg text-center rounded-md">
                        <p className="text-[#1F2937] font-medium flex items-center justify-center gap-2">
                            <IoIosArchive />
                            Archive
                        </p>
                    </div>

                    <div className="p-4 cursor-pointer border border-[#62738280] shadow-lg text-center rounded-md">
                        <p className="text-[#EF4444] font-medium flex items-center justify-center gap-2">
                            <RiDeleteBin6Line />
                            Delete
                        </p>
                    </div>
                </div>

            </div>

            <div className="max-w-8xl space-y-6">
                <div className=" grid grid-cols-3 mx-auto gap-5 justify-center">
                    <div className="text-center bg-white shadow-lg py-6 px-4 space-y-2">
                        <h1 className="text-3xl font-bold">{days_since_contact}</h1>
                        <p className="text-[#64748B] text-[16px] font-semibold">
                            Days Since Contact
                        </p>
                    </div>

                    <div className="text-center bg-white shadow-lg py-6 px-4 space-y-2">
                        <h1 className="text-3xl font-bold">{goal}</h1>
                        <p className="text-[#64748B] text-[16px] font-semibold">
                            Goal (Days)
                        </p>
                    </div>

                    <div className="text-center bg-white shadow-lg py-6 px-4 space-y-2">
                        <h1 className="text-3xl font-bold">{next_due_date}</h1>
                        <p className="text-[#64748B] text-[16px] font-semibold">
                            Next Due
                        </p>
                    </div>
                </div>

                <div className="bg-white grid grid-cols-2 justify-between shadow-lg py-6 px-4 space-y-2">
                    <div>
                        <h1 className="text-[#64748B] text-2xl font-semibold">
                            Relationship Goal
                        </h1>
                        <p className="text-[#64748B] text-[16px] font-bold">
                            Connect every{" "}
                            <span className="text-black">{goal} days</span>
                        </p>
                    </div>

                    <div className="grid justify-items-end">
                        <button className="btn p-4">Edit</button>
                    </div>
                </div>

                <div className="space-y-3 mt-3 shadow-lg p-7">
                    <h1 className="text-[#64748B] text-2xl font-semibold">
                        Quick Check-In
                    </h1>

                    <div className=" grid grid-cols-3 mx-auto gap-5 justify-center">
                        <div
                            className="text-center bg-[#F8FAFC] shadow-lg py-6 px-4 space-y-2"
                            onClick={() => handleCall(expectedKeeper)}
                        >
                            <h1 className="text-3xl grid justify-center">
                                <FiPhoneCall />
                            </h1>
                            <p className="text-[#64748B] text-[16px] font-semibold">
                                Call
                            </p>
                        </div>

                        <div className="text-center bg-[#F8FAFC] shadow-lg py-6 px-4 space-y-2"
                        onClick={() => handleText(expectedKeeper)}
                        >
                            <h1 className="text-3xl grid justify-center">
                                <BsChatSquareText />
                            </h1>
                            <p className="text-[#64748B] text-[16px] font-semibold">
                                Text
                            </p>
                        </div>

                        <div className="text-center bg-[#F8FAFC] shadow-lg py-6 px-4 space-y-2"
                        onClick={() => handleVideo(expectedKeeper)}
                        >
                            <h1 className="text-3xl grid justify-center">
                                <FaVideo />
                            </h1>
                            <p className="text-[#64748B] text-[16px] font-semibold">
                                Video
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeeperDetails;