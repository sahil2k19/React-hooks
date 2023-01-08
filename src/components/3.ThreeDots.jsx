import React , {useState} from 'react'

const ThreeDots = () => {
    const bioData = 
        {
            id:0, myName:"vinod", age:26
        }
    

    const [myObject, setMyObject] = useState(bioData);

    function updateTheObj(){
        setMyObject({ ...myObject, myName:'sahil'})
    }

  return (
    <>
        <h1>Three Dots ... </h1>
        <h3>Name :{myObject.myName} and age : {myObject.age} </h3>
        <button onClick={updateTheObj}>Update</button>
        <h1>-------------------------------------------
</h1>
    </>
  )
}

export default ThreeDots