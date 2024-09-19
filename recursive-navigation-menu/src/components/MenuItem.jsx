import { MenuList } from "./MenuList"

export const MenuItem = ({item}) =>{
    return (
        <li>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length > 0 ? (
                    <MenuList list={item.childre}/>
                ) : null
            }
        </li>
    )
}