import React, { createContext } from "react";
import { useState } from "react";

export const KeeperContext = createContext();

const KeeperProvider = ({ children }) => {
    const [storeKeeper, setStoreKeeper] = useState([]);

    const handleCall = (currantFriend) => {
        const isExistKeeper = storeKeeper.find(
            (friend) => friend.id === currantFriend.id
        );

        if (isExistKeeper) {
            alert("This friend is already exist");
        } else {
            setStoreKeeper((prev) => [...prev, currantFriend]);
            // alert(`${currantFriend.name} is add to list`)
        }
    };

    const value = {
        setStoreKeeper,
        handleCall,
    };
 
    return (
        <KeeperContext.Provider  value={value}>
            {children}
        </KeeperContext.Provider>
    );
};

export default KeeperProvider;