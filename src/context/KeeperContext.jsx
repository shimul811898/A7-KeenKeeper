import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const KeeperContext = createContext();

const KeeperProvider = ({ children }) => {
  const [callList, setCallList] = useState([]);
  const [textList, setTextList] = useState([]);
  const [videoList, setVideoList] = useState([]);


  const isAlreadyAdded = (id) => {
    return (
      callList.find((item) => item.id === id) ||
      textList.find((item) => item.id === id) ||
      videoList.find((item) => item.id === id)
    );
  };

  const addToList = (currentFriend, list, setList, type) => {
    if (isAlreadyAdded(currentFriend.id)) {
      toast.error(`${currentFriend.name} already added in timeline`);
      return;
    }

    const newEntry = {
      ...currentFriend,
      type,
      addedAt: new Date().toLocaleString(),
    };

    setList([...list, newEntry]);

    toast.success(`${currentFriend.name} added to ${type}`);
  };

  const handleCall = (currentFriend) => {
    addToList(currentFriend, callList, setCallList, "call");
  };

  const handleText = (currentFriend) => {
    addToList(currentFriend, textList, setTextList, "text");
  };

  const handleVideo = (currentFriend) => {
    addToList(currentFriend, videoList, setVideoList, "video");
  };

  const value = {
    callList,
    textList,
    videoList,
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <KeeperContext.Provider value={value}>
      {children}
    </KeeperContext.Provider>
  );
};

export default KeeperProvider;