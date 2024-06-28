import { FaFacebook ,FaSquareInstagram ,FaLinkedin } from "react-icons/fa6";

export const newsLetterCardContent = [
    {
    id:"1",
    title :"Summer drinks",
    subTitle:"Buy one fall drink, get one free",
    bodyContent:"Rewards members get one free handcrafted fall drink with purchase of any fall beverage, every Thursday afternoon in September.",
    buttonContent:"Oder Now",
    imgSrc : "/Summerdrinks-sections1.png",
    isReverse:true,
    },
    {
    id:"2",
    title :"Member Ship",
    subTitle:"Buy 9 coffees and the 10th is on us!",
    bodyContent:"Start your day with a cup of coffee. Choose your favorite coffee here Get two coffee cups with a special discount",
    buttonContent:"Join Now",
    imgSrc:"/illustration8.svg",
    isReverse:false,
    },
    {id:"3",
    title :"Personal cups for good",
    subTitle:"",
    bodyContent:"Your choice is a positive and responsible one—because bringing your clean reusable cup helps our planet.",
    buttonContent:"Learn More",
    imgSrc:"/illustration7.svg",
    isReverse:true,
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
        path:"/Menu",
        clicked:false,
    },
    {
        Name:"About Us",
        path:"/#about",
        clicked:false,
    },
    {
        Name:"NewsLetter",
        path:"/#newsletter",
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

export const  ChoiceOfSize= [
    {
    id:"1",
    name:"Small",
    },
    {
    id:"2",
    name:"Regular",
    },
    {
    id:"3",
    name:"Large",
    },
]as const;

export const  ChoiceOfCoffee= [
    {
      id:"1",
      name:"Signature Blend",
    },
    {
      id:"2",
      name:"Platinum Blend",
    },
    {
      id:"3",
      name:"Decaf",
    },
]as const;

export const ExtraShot =[
    {
        id:"1",
        name:"Add Signature Blend"
    },
    {
        id:"2",
        name:"Add Platinum Blend"
    },
    {
        id:"3",
        name:"Add Decaf"
    },
]as const 

export const ChoiceOfMilk =[
    {
        id:"1",
        name:"Full Cream Milk"
    },
    {
        id:"2",
        name:"Skimmed Milk"
    },
    {
        id:"3",
        name:"Oat Milk"
    },
    {
        id:"4",
        name:"No Milk"
    },
]

export const UserInfoNavContent = [
    {
        id: "1",
        name: "Account info",
        path: "/",
    },
    {
        id: "2",
        name: "Your Orders",
        path: "/",
    }
] as const;