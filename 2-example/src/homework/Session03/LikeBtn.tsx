// import React from 'react'
import {useState} from "react"
import { AiOutlineLike, AiFillLike} from "react-icons/ai";

function LikeBtn() {
    const [isLike, setIsLike] = useState<boolean>(true)
    const handleClick = () => {
        setIsLike(!isLike)
    }
  return (
    <div onClick={handleClick}>
        {isLike ? <AiOutlineLike/> : <AiFillLike/>}
    </div>
  )
}

export default LikeBtn