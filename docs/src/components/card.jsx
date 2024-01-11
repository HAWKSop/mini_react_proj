import { FaFileInvoice } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoIosClose } from "react-icons/io"
import { motion } from "framer-motion"

function Card ({data, reference}){



    return(
        <>
        <motion.div  drag dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{bounceStiffness:100, bounceDamping: 30}} className="relative flex-shrink-0 w-60 h-[19rem] bg-zinc-900/70 rounded-[50px] text-white p-8 overflow-hidden">
            <FaFileInvoice  />
            <p className="text-sm leading-tight mt-5 font-semibold ">{data.desc}</p>

            <div className="footer absolute bottom-0  w-full left-0 ">
                <div className="flex items-center justify-between px-8 mb-3 py-3">
                    <h5>{data.fileSize}</h5>
                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                        {data.close ? <IoIosClose/>: <GoDownload size = '.7em' color = '#fff'/>  }
                    
                    </span>
 
                </div>
                {data.tag.isOpen ? (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
                    <h3 className="text-sm font-semibold px-8 ">{data.tag.tagTitle}</h3>
                </div>
                ) : null }
                
            </div>
                    
        </motion.div>
        
        </>
    )
}

export default Card