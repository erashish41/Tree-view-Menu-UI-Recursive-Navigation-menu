import { useState } from "react";
import { MenuList } from "./MenuList"
import { FaPlus, FaMinus } from "react-icons/fa";


export const MenuItem = ({item}) =>{

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    const handleToggleChildren = (currentLabel) => {
        setDisplayCurrentChildren((prev) => ({...prev, [currentLabel] : !prev[currentLabel]
        }))
    };

    return (
        <li >
        <div className="menu-item">
            <p>{item.label}</p>
            {item && item.children && item.children.length 
            ? (<span onClick={() => handleToggleChildren(item.label)}>
                {
                    displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/> 
                }
            </span>) 
            : null}
        </div>
            {
                item && item.children && item.children.length && displayCurrentChildren[item.label] > 0 ? (
                    <MenuList list={item.children}/>
                ) : null
            }
            
        </li>
    )
};