import React, {useRef} from 'react'

const UseRefUncontrolledform = () => {
    // like a useState
    const luckyName = useRef(null)
    let name = "";
    function submitForm(e){
        e.preventDefault();
         name = luckyName.current.value;
         console.log(name);
    }
   
  return (<>
    <h1>UseRefUncontrolledform</h1>
    <form action="" onSubmit={submitForm}>
        <div>
            <label htmlFor="luckyName">Enter your LuckyName</label>
            <input type="text" id='luckyName' ref={luckyName} />
            <button type='submit'>Submit</button>
        </div>
    </form>
    <div>
        {
            name ||
            <h2>
                `your name is ${name}`
            </h2>
        }
    </div>
  </>
  )
}

export default UseRefUncontrolledform