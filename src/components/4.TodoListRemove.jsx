import React ,{useState} from 'react'

const TodoListRemove = () => {

    const bioData = [
        {
            id:0, myName:"vinod", age:26
        },
        {
            id:1, myName:"sahil", age:26
        },
        {
            id:2, myName:"gagan", age:26
        },
    ]

    const [arr, setArr]  =  useState(bioData);

    function remove(id){
        const newArr = arr.filter((elem)=>{
            return (
                elem.id!==id
            )
        })
        setArr(newArr);
    }

  return (
    <>
        <h1>Todo List Remove</h1>

       {
        arr.map((elem)=>{
            return (<>
                <h2>{elem.myName}</h2>
                {/*  here we use fat-arrow at onClick function 
                    as we cannot directly call the function like:- onClick={remove(elem.id)}
                */}
                <button onClick={()=>remove(elem.id)}>Remove</button>
                </>
            )
        })
       }
       <h1>-------------------------------------------
</h1>
    </>
  )
}

export default TodoListRemove