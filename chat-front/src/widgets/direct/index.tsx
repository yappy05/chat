import FriendName from "./ui/FriendName.tsx";
import InputSendMassage from "./ui/InputSendMassage.tsx";
import Massages from "./ui/Massages.tsx";

const DirectWidget = () => {
    return (
        <>
            <div>
                <FriendName/>
                <Massages/>
                <InputSendMassage/>
            </div>
        </>
    )
}

export  default DirectWidget