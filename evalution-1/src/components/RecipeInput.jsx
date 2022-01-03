import { useState } from "react"

export const RecipeInput=({getData})=>{
        const [data,setData]=useState([])

        const [title,setTitle]=useState("")
        const [ingredient,setIngredient]=useState("")
        const [time,setTime]=useState("")
        const [instructions,setInstructions]=useState("")

const handleChange1=(e)=>{
        setTitle(e.target.value)
}
const handleChange2=(e)=>{
        setIngredient(e.target.value)
}
const handleChange3=(e)=>{
        setTime(e.target.value)
}
const handleChange4=(e)=>{
        setInstructions(e.target.value)
}
// console.log()
const handleSubmit=()=>{
   const payload={
           title,
           ingredient,
           time,
           instructions
   }

setData([...data,payload])
// console.log('payload:', payload)

sendData()

}
const sendData=()=>{
        console.log("dtad",data)
    
        const axios=require("axios")
        axios.post(`http://localhost:3001/recipe${data}`)  
        
        .then((res)=>{
                console.log(res)
        })
}





        return(
                <>  
        
                <input type="text" placeholder="Enter name" onChange={handleChange1}/>
                <input type="text" placeholder="Enter ingredient" onChange={handleChange2}/>
                <input type="num" placeholder="time to cook" onChange={handleChange3}/>
                <input type="text" placeholder="instructions" onChange={handleChange4}/>
                <input type="file" />
                <button onClick={handleSubmit}>submit</button>
                </>
        )
}