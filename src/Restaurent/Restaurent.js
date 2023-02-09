import React, { useState } from 'react'
import "./style.css" 
import Menu from "../component/MenuApi.js"
import MenuCard from "../component/MenuCard";
import Navbar from '../component/Navbar';


const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})

),"All",

];

const Restaurent = () => {

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList);    

    const filterItem = (category) =>{

      if(category==="All"){
        setMenuData(Menu);
        return;
      }
      const updatedList = Menu.filter((curElem) =>{
        return curElem.category === category;
      });
      setMenuData(updatedList);
    };
  
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurent
