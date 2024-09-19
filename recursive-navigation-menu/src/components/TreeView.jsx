import { MenuList } from "./MenuList"

export const TreeView = ({menuData = []}) => {
    return (
        <div className="tree-view-container">
            <MenuList list={menuData}/>
        </div>
    )
}