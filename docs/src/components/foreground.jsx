import Card from "./card"
import { useRef } from "react"

function Foreground(){
    
    //this is used because the card that we are using should not go outside the screen
    const ref = useRef(null)

    

    const data = [
        {
            desc:"This is Green box",
            fileSize : "0.9mb",
            close:false,
            tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"},
           
        },

        {
            desc:"This is Green box",
            fileSize : "0.9mb",
            close:false,
            tag:{isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
            
        },

        {
            desc:"This is Green box",
            fileSize : "0.9mb",
            close:true,
            tag:{isOpen: false, tagTitle: "Download Now", tagColor: "green"}, 
            

        }

    ]

    

  

    return(
        <>
        
        {/* 800/50 means that color 800 and transperncy by half*/}
        <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap
        p-5'>
            {data.map((item,index)=>
            <Card data={item} reference={ref} />
            )}
        </div>
        </>
    )
}

export default Foreground