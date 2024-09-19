import { MenuItem } from "./MenuItem"

export const MenuList = ({list = []}) =>{
    return (
        <ul className="menu-list-container">
            {
                list && list.length > 0
                ? list.map((listItem) =>  <MenuItem item={listItem}/> )
                : null
            }
        </ul>
    )
}