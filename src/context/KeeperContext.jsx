import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const KeeperContext = createContext();

const KeeperProvider = ({ children }) => {

    const [callList, setCallList] = useState([]);
    const [textList, setTextList] = useState([]);
    const [videoList, setVideoList] = useState([]);


    const handleCall = (currentFriend) => {
        const isExistInCallList = callList.find(
            (item) => item.id === currentFriend.id
        );

        if (isExistInCallList) {
            toast.error(`${currentFriend.name}`);
        } else {

            const newEntry = { ...currentFriend, addedAt: new Date().toLocaleString() };
            setCallList([...callList, newEntry]);

            toast.success(`${currentFriend.name} `);
        }
    };
    const handleText = (currentFriend) => {
        const isExistInTextList = textList.find(
            (item) => item.id === currentFriend.id
        );

        if (isExistInTextList) {
            toast.error(`${currentFriend.name}`);
        } else {

            const newEntry = { ...currentFriend, addedAt: new Date().toLocaleString() };
            setTextList([...textList, newEntry]);

            toast.success(`${currentFriend.name} `);
        }
    };
    const handleVideo = (currentFriend) => {
        const isExistInVideoList = videoList.find(
            (item) => item.id === currentFriend.id
        );

        if (isExistInVideoList) {
            toast.error(`${currentFriend.name}`);
        } else {

            const newEntry = { ...currentFriend, addedAt: new Date().toLocaleString() };
            setVideoList([...videoList, newEntry]);

            toast.success(`${currentFriend.name} `);
        }
    };


    const value = {
        callList,
        setCallList,
        handleCall,
        textList,
        setTextList,
        handleText,
        videoList,
        handleVideo,
        setVideoList
        
    };

    return <KeeperContext.Provider value={value}>{children}</KeeperContext.Provider>;
};

export default KeeperProvider;