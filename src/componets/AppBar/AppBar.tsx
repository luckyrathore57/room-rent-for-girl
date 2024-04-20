import AppBarLogged from "./AppBarLogged";
import AppBarNotLogged from "./AppBarNotLogged";

const AppBar=()=>{
    const loggedIn=false;

    if(loggedIn){
        return <AppBarLogged/>
    }
    else{
        return (
        <AppBarNotLogged/>
        )
    }
}

export default AppBar;