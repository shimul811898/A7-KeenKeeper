import React, { use } from "react";
import KeeperCard from "../ui/KeeperCard";


const keeperPromise = fetch('/KeeperData.json').then(res => res.json())

const AllKeeper = () => {
    const keeper = use(keeperPromise);

    return (
        <div className="space-y-4 mt-30">
            <div className="max-w-6xl text-start mx-auto" >
                <h1 className="text-3xl font-bold">Your Friends</h1>
            </div>
            <div className="max-w-6xl grid grid-cols-4 mx-auto gap-10 justify-center items-center">
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