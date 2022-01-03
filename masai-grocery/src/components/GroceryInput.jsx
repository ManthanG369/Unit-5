import { useState } from "react"

export const GroceryInput=({getData})=>{
        const [text,setText]=useState("")

        const handleChange=(e)=>{
                setText(e.target.value)
        }
        const handleClick=()=>{
                getData(text)
        }
        // console.log(text)
        return(
                <>
            <input type="text" placeholder="enter item" onChange={handleChange}/>    
                <button onClick={handleClick}>ADD</button>
                </>
        )
}