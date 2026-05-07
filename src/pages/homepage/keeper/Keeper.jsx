import { useContext } from "react";
import { KeeperContext } from "../../../context/KeeperContext";



const Keeper = () => {

    const { handleCall, storeKeeper } = useContext(KeeperContext);
    console.log(storeKeeper)


    return (
        <div>
            <h1>Keeper</h1>

        </div>
    );
};

export default Keeper;