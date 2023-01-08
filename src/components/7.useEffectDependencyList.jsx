import React , {useState, useEffect} from 'react'

const UseEffectDependencyList = () => {

    const[count ,setCount] = useState(0);
    useEffect(()=>{
        console.log("i am first")
        if(count==0){
            document.title = `Chats`
        }
        else{

            document.title = `Chats(${count})`
        }
        },[count]
    )
    useEffect(()=>{
        console.log("i am second");
    },[])

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

export default UseEffectDependencyList