import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import * as TfiIcons from "react-icons/tfi"

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
        title: 'Prodaja',
        icon: <BsIcons.BsShop />,
        url: '/products',
    },
    {
        title: 'Galerija',
        icon: <TfiIcons.TfiGallery />,
        url: '/gallery',
    },
    {
        title: 'Korisnici',
        icon: <BiIcons.BiSolidUser />,
        url: '/users',
    },
]