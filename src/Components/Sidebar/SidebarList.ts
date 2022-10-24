import { IconType } from "react-icons";
import { RiDashboardFill, RiAdminFill } from "react-icons/ri";
import {AiFillSetting } from "react-icons/ai"

interface SidebarItem {
    title: string;
    icon: IconType;
    uac?: number;
    link: string
}


export const SidebarList: SidebarItem[] = [
    {
        title: 'Dashboard',
        icon: RiDashboardFill,
        link: 'dashboard'
    },
    {
        title: 'Admin',
        icon: RiAdminFill,
        uac: 26,
        link: 'administrator'
    },
    {
        title: 'Settings',
        icon: AiFillSetting,
        uac: 26,
        link: 'settings'
    }
]