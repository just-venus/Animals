import { useState } from "react";

import bird from ' ./src/assets/svg/bird.svg '
import dog from ' ./src/assets/svg/dog.svg '
import cat from ' ./src/assets/svg/cat.svg '
import cow from ' ./src/assets/svg/cow.svg '
import gator from ' ./src/assets/svg/gator.svg '
import heart from ' ./src/assets/svg/heart.svg '
import horse from ' ./src/assets/svg/horse.svg '

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