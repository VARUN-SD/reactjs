import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlinestatus,setOnlinestatus]=useState(true);
    useEffect(()=>{
        window.addEventListener('online',()=>{
            setOnlinestatus(true);
        });
        window.addEventListener('offline',()=>{
            setOnlinestatus(false);
        });
    })
    return onlinestatus;  //returns the current online status as a boolean value.  //this hook will automatically update whenever the online/offline status changes.  //you can use this hook in your application to show a loading spinner or other UI elements when the user is offline.  //Note: this hook is not compatible with IE.  //for IE, you can use the window.navigator.onLine property instead.  //you can also use the 'navigator.onLine
};

export default useOnlineStatus;