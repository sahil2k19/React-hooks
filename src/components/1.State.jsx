import React, {useState} from 'react'



const State = () => {

    const [name , setName  ]= useState("sahil")
    const [arr, setArr] = useState([]);
    function changeName(e){
        if(name=='sahil'){

            setName("sahil Babu");
        }
        else{
            setName("sahil");
        }
    }
    function changeCurrent(e){
        setName(e.target.value);
    }

    function takeName(e){
        if(!name){

        }
        else{

            setArr([...arr,name]);
            setName("");
        }
    }
    function clear(){
        setArr([])
    }
    
  return (
    <>
        <h1>
            This is UseState
        </h1>
        <div className="container">
            <input type="text" value={name} onChange={changeCurrent} />
            <h1>This is my Name = {name}</h1>
            <button onClick = {changeName}>Change</button>
            <button onClick = {takeName}>submit</button>
            <button onClick={clear}>Clear</button>

            {
                arr.map(
                    function(name, ind){
                        return (
                            <div key={ind} className="noclass">
                                <h1>{name}</h1>
                            </div>
                        )
                    }
                )
            }
            <h1>---------------------------------------------</h1>
        </div>
    </>
  )
}

export default State