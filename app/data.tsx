import finlab from "@/public/finlab.png"
import uob from "@/public/uob.png"
import depa from "@/public/depa.png"
import nstda from "@/public/nstda.png"
import zort from "@/public/zort.png"
import fillgoods from "@/public/fillgoods.png"
import shipnity from "@/public/shipnity.png"
import page365 from "@/public/page365.png"
import makewebeasy from "@/public/makewebeasy.png"
import squarespace from "@/public/squarespace.png"
import wordpress from "@/public/wordpress.png"
import wix from "@/public/wix.png"
import buzzebees from "@/public/buzzebees.png"
import chococrm from "@/public/chococrm.png"
import pointspot from "@/public/pointspot.png"
import connectx from "@/public/connectx.png"
import Image, { StaticImageData } from "next/image"

interface ImgListProps {
    img: StaticImageData
    alt: string
    className?: string
}

export const ImgList = ({ list } : { list:ImgListProps[] }) => {
    return <>{list.map(brand => <Image key={brand.alt} src={brand.img} alt={brand.alt} className={brand.className}/>)}</>
}

export const trustedBrands = [
    { img:finlab, alt:"Finlab", className:"h-6 w-auto" },
    { img:uob, alt:"UOB", className:"h-4 w-auto" },
    { img:depa, alt:"Depa", className:"h-8 w-auto" },
    { img:nstda, alt:"nstda", className:"h-8 w-auto" }
]

export const orderManagementSystems = [
    { img:zort, alt:"Zort", className:"h-6 w-auto" },
    { img:fillgoods, alt:"Fillgoods", className:"h-[22px] w-auto" },
    { img:shipnity, alt:"Shipnity", className:"h-7 w-auto" }
]

export const storefrontSystems = [
    { img:page365, alt:"Page 365", className:"h-16 w-auto" },
    { img:makewebeasy, alt:"Make Web Easy", className:"h-6 w-auto" }
]

export const siteBuilderSystems = [
    { img:makewebeasy, alt:"Make Web Easy", className:"h-6 w-auto" },
    { img:squarespace, alt:"Squarespace", className:"h-7 w-auto" },
    { img:wordpress, alt:"Wordpress", className:"h-10 w-auto" },
    { img:wix, alt:"Wix", className:"h-[18px] w-auto" }
]

export const lineOASystems = [
    { img:buzzebees, alt:"Buzzebees", className:"h-8 w-auto" },
    { img:chococrm, alt:"ChocoCRM", className:"h-6 w-auto" },
    { img:pointspot, alt:"Pointspot", className:"h-[30px] w-auto" },
    { img:connectx, alt:"ConnectX", className:"h-4 w-auto" }
]