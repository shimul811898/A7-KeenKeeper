import React, { use } from "react";
import KeeperCard from "../ui/KeeperCard";


const keeperPromise = fetch('/KeeperData.json').then(res => res.json())

const AllKeeper = () => {
    const keeper = use(keeperPromise);

    return (
        <div className="max-w-6xl space-y-4 mt-30 mx-auto">
            <div className="max-w-7xl mx-auto" >
                <h1 className="text-3xl font-bold">Your Friends</h1>
            </div>
            <div className=" grid lg:grid-cols-4  gap-10 justify-center items-center sm:grid-cols-1 ">
                {keeper.map((friend, ind) => {
                    return (
                        <KeeperCard key={ind} friend={friend}/>
                    )
                })

                }
            </div>
        </div>
    )

}

export default AllKeeper;