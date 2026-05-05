import React, { use } from "react";


const keeperPromise = fetch('/KeeperData.json').then(res => res.json())

const AllKeeper = () => {
    const keeper = use(keeperPromise);

    return (
        <div className="space-y-4 mt-30">
            <div className="max-w-6xl text-start mx-auto" >
                <h1 className="text-3xl font-bold">Your Friends</h1>
            </div>
            <div className="max-w-6xl grid grid-cols-4 mx-auto gap-10 justify-center items-center">
                {keeper.map((friend) => {
                    return (
                        <div className="text-center space-y-3 hover:scale-103 transition duration-200 hover:shadow-[0_4px_20px_rgb(127,66,255)]">
                            <div className="card b shadow-sm p-5">
                                <div className="flex justify-center">
                                    <img className="rounded-full" src={friend.picture} />
                                </div>
                                <h1 className="text-2xl font-bold">{friend.name}</h1>
                                <p className="text-[16px]">{friend.days_since_contact}d ago</p>
                                <div className="mx-auto py-3 flex gap-3">
                                    {friend.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-[#CBFADB] rounded-full px-4 py-1 text-[#244D3F]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                               <div>
                                 <span
                                    className={` rounded-full py-2 px-4 text-white  ${friend.status === "overdue"
                                        ? " bg-[#EF4444] "
                                        : friend.status === "on-track"
                                            ? "bg-[#244D3F] "
                                            : " bg-[#EFAD44] "
                                        }
                                    `}
                                >
                                    {friend.status}
                                </span>
                               </div>
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )

}

export default AllKeeper;