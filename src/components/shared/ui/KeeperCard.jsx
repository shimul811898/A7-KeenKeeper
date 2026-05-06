import React from "react";
import { Link } from "react-router";

const KeeperCard = ({friend}) => {
    return (
       <Link to={`/keeperDetails/${friend.id}`} className="text-center space-y-3 hover:scale-103 transition duration-200 hover:shadow-[0_4px_20px_rgb(127,66,255)]">
                            <div className="card b shadow-sm p-5">
                                <div className="flex justify-center">
                                    <img className="rounded-full" src={friend.picture} />
                                </div>
                                <h1 className="text-2xl font-bold">{friend.name}</h1>
                                <p className="text-[16px]">{friend.days_since_contact}d ago</p>
                                <div className="mx-auto py-3 flex gap-3">
                                    {friend.tags.map((tag, ind) => (
                                        <span
                                            key={ind}
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
                        </Link>
    )

}

export default KeeperCard;