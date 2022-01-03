import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryItem } from "./GroceryList"
export const Grocery=()=>{
          const [list,setList]=useState([])
        
        const handleClick=(data)=>{
           console.log("data in grocery",data)
           setList([...list,data])
        }
        return(

                <>
                <GroceryInput getData={handleClick}/>
                {list.map(e=><GroceryItem/>)}
                </>
        )
}