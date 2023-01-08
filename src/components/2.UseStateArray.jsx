import React  , {useState}from 'react'

const UseStateArray = () => {

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
    const [arr, setArr] = useState(bioData)

    

    function clearData(){
        setArr([]);
    }
    function visibleData(){
        setArr(bioData);
    }

  return (
    <>
        <h1>UseState using Array</h1>
        <div className="" key={bioData.id} >
        {
            arr.map((currE)=>{
                return <h1>name:{currE.myName} and Age : {currE.age}</h1>
            })
        }
        <button onClick={clearData}>Clear</button>
        <button onClick={visibleData}>Visible</button>
        </div>
        <h1>-------------------------------------------
</h1>
    </>
  )
}

export default UseStateArray