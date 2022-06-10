import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChartLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdkeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from '../data/dummy/avatar.jpg'
import {Cart,Chat,Notification, USerProfile} from '.'

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({title, customeFunc, icon, color, dotColor}) => {
  <TooltipComponent content={}>

  </TooltipComponent>
}

const Navbar = () => {
  const {activeMeny, setActiveMenu} = useStateContext()

  return <div className="flex justify-between p-2 md:mx-6 relative">
    <NavButton title="Menu" customeFunc={()=>{}} />
  </div>;
};

export default Navbar;
