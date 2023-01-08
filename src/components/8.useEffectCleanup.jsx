import React , {useState, useEffect} from 'react'

const UseEffectCleanup = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width);
    const updateWidth = ()=>{
        
        setWidthCount(window.innerWidth);
    }

    useEffect(
        ()=>{
            window.addEventListener("resize", updateWidth);
            
            // cleanUP function
            return ()=>{
                window.removeEventListener("resize", updateWidth);
            }
        }
    )

  return (
    <>
       <h1> UseEffectCleanup</h1>
        <h1>{widthCount}</h1>
    </>
  )
}

export default UseEffectCleanup