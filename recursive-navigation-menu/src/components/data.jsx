
// 1. If both types of exports are present in the file, it might be because the code was initially 
//      written with one type of export and later modified to include the other. However, having both 
//      is redundant if you're exporting the same data object, as you pointed out.

// 2. if i have to remove (export default menu) from this file than i have to import it in app.jsx
//      as in { } - import menu from "./components/data";


export const menuData = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "Location",
                        to: "/location",
                    },
                ],
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "/account",
            },
            {
                label: "Security",
                to: "/security",
                children: [
                    {
                        label: "Login",
                        to: "/login",
                    },
                    {
                        label: "Register",
                        to: "/register",
                    },
                ],
            },
        ],
    },
];

export default menuData;