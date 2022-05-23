import Articles from "./views/articles";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact"
import Error from "./views/error";
import Home from "./views/home";
import Privacy from "./views/privacy";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"Articles",path:"/articles",component:<Articles/>},
    {menuItem:true,menuName:"Contact",path:"/contact",component:<Contact/>},
    {menuItem:false,menuName:"",path:"/cominsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

const APP_LINKS = {
    messages: "",
    users: ""
};

export {
    APP_LINKS,
    ERRORS,
    PATHS
}