import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import * as GrIcons from "react-icons/gr"
import * as FiIcons from "react-icons/fi"

export const menu = [
    {
        title: 'Dashboard',
        icon: <AiIcons.AiOutlineLineChart />,
        url: '/',
    },
    {
        title: 'Novosti',
        icon: <BsIcons.BsNewspaper />,
        url: '/news',
    },
    {
        title: 'Članovi',
        icon: <FiIcons.FiUsers />,
        url: '/membmers',
    },
    {
        title: 'Fan-Shop',
        icon: <BsIcons.BsShop />,
        url: '/products',
    },
    {
        title: 'Galerija',
        icon: <GrIcons.GrGallery />,
        url: '/gallery',
    },
    {
        title: 'Korisnici',
        icon: <BiIcons.BiSolidUser />,
        url: '/users',
    },
]