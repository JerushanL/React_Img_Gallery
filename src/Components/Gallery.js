import husky from "../Images/husky.jpg"
import husky2 from "../Images/husky2.webp"
import ausShepherd from "../Images/ausShepherd.webp"
import black from "../Images/black.webp"
import brittany from "../Images/Brittany-1.webp"
import german from "../Images/German.jpg"
import golden from "../Images/Goldendoodle.jpg"
import goldenR from "../Images/goldenR.jpg"
import havanese from "../Images/Havanese.webp"
import pomer2 from "../Images/PomeraniansW.jpg"

import ImageBox from "./ImageBox";


let dogs = [
    {
        image: husky,
        name: "Siberian Husky"
    },
    {
        image: goldenR,
        name: "Golden Retriever"
    },
    {
        image: ausShepherd,
        name: "Australian Shepherd"
    },
    {
        image: black,
        name: "Black Terrier"
    },
    {
        image: brittany,
        name: "Brittany"
    },
    {
        image: german,
        name: "German Shepherd"
    },
    {
    image: golden,
    name: "Golden Retriever"
    },
    {   
    image: pomer2,
        name: "Pomernian"
    },
    {
    image: havanese,
        name: "Havanese"
    },    
    {
    image: husky2,
     name: "Husky"
    }

]


function Gallery() {
    return (
        <div className="container">
            <div className="wrapper">
            {
                dogs.map((data) => {
                    return <ImageBox image={data.image} name={data.name}></ImageBox>
                })
            }
            </div>
        </div>
    )
}

export default Gallery