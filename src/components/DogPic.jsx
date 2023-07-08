import { useState } from 'react'
import dogHatImgs from "../assets/dog-hat"


const DogPic = () => {
    const [dogPic, setDogPic] = useState(dogHatImgs[1])
    const handleClick = () => {
        dogPic === dogHatImgs[1] ? setDogPic(dogHatImgs[0]) : setDogPic(dogHatImgs[1])
    }
    
    return (
        <>
            <img src={dogPic} alt="a dog with or without a hat"></img>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export default DogPic