import SummerimgSrc from '../public/Summerdrinks-sections1.png'
import { FaFacebook ,FaSquareInstagram ,FaLinkedin } from "react-icons/fa6";

export const newsLetterCardContent = [
    {
    id:"1",
    title :"Summer drinks",
    subTitle:"Buy one fall drink, get one free",
    bodyContent:"Rewards members get one free handcrafted fall drink with purchase of any fall beverage, every Thursday afternoon in September.",
    buttonContent:"Oder Now",
    SummerimgSrc,
    isReverse:true,
    },
    {
    id:"2",
    title :"Member Ship",
    subTitle:"Buy 9 coffees and the 10th is on us!",
    bodyContent:"Start your day with a cup of coffee. Choose your favorite coffee here Get two coffee cups with a special discount",
    buttonContent:"Join Now",
    SummerimgSrc,
    isReverse:false,
    },
] as const

export const NavLinks = [
    {
        Name:"Home",
        path:"/",
        clicked:true,
    },
    {
        Name:"Menu",
        path:"/",
        clicked:false,
    },
    {
        Name:"About Us",
        path:"/",
        clicked:false,
    },
    {
        Name:"NewsLetter",
        path:"/",
        clicked:false,
    },
    {
        Name:"contact",
        path:"/",
        clicked:false,
    },
] as const

export const SocialLinks =[
    {
        id:"1",
        icon:FaFacebook,
        hrefUrl:"/"
    },     
    {
        id:"2",
        icon:FaSquareInstagram,
        hrefUrl:"/"
    },     
    {
        id:"3",
        icon:FaLinkedin,
        hrefUrl:"/"
    },     
]as const 