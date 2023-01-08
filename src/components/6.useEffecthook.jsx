import React ,{useEffect, useState} from 'react'

const UseEffecthook = () => {
    const[count ,setCount] = useState(0);
    useEffect(
        ()=>{
            if(count==0){
                document.title = `Chats`
            }
            else{

                document.title = `Chats(${count})`
            }
        }
    )

    function changeNum(){
        
        setCount(count+1);
    }
  return (
    <>
        <h1>UseEffectHook</h1>
        <h1>{count}</h1>
        <button onClick={changeNum}>ClickMe</button>

        
        
        <h1>-----------------------------</h1>
    </>
  )
}

export default UseEffecthook 