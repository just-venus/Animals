import { useState } from "react";

import dog from ' ./assets/svg/dog.svg '
import bird from ' ./assets/svg/bird.svg '
import cat from ' ./assets/svg/cat.svg '
import cow from ' ./assets/svg/cow.svg '
import gator from ' ./assets/svg/gator.svg '
import heart from ' ./assets/svg/heart.svg '
import horse from ' ./assets/svg/horse.svg '

import ' ./animalshow.css '

const svgMap = {
    dog,
    bird,
    cat,
    cow,
    gator,
    heart,
    horse
}

function animalshow({type}){
    const [click, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }
    console.log(type)

    return (
        <div
        onClick={handleClick}
        className= "animal-show"
        >

        <img
        src={svgMap[type]}
        alt="animal"
        className= "animal"
        />
        
        <img
        src={heart}
        alt="heart"
        style={{ width:10+10 * clicks + 'px'}}
        className= "heart"
        />

        </div>
    )
}

export default animalshow