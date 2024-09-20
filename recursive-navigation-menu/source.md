<!--    T R E E    V I E W  /
        M E N U     U I     /
        R E C U R S I V E   N A V I G A T I O N     M E N U -->

-components
        - data.jsx
        - MenuItem.jsx
        - MenuList.jsx
        - TreeView.jsx

-data.jsx
- the top level menu items are "Home", "Profile", "Settings".
- Label: user will see on interface
- to: represent URL
- data shown as: 

Profile -> Detials -> Location
Setting -> Accounts -> Security
                    -> Login
                    -> Register

- Recursion means a function calls itself to repeat a task. In your case, the components are 
        handling recursion by calling themselves to create nested menus.
- Recursion helps avoid repeating the same logic for each level of nesting.

-The steps are:
- MenuList renders Profile.
- MenuItem checks if Profile has children. It does, so MenuList renders the Details item.
- MenuItem checks if Details has children. It does, so MenuList renders the Location item.
- MenuItem checks if Location has children. It doesn't, so recursion stops here for this branch.

-MenuItem.jsx
-If an item has children, the MenuList is called again, but this time, it renders a new ul for 
        the children.
- This means that as long as an item has children, MenuList will keep calling itself to render 
        those children.