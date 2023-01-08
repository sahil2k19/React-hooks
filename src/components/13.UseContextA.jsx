import React , {createContext} from 'react'
import UseContextB from './13.UseContextB';

// A is the parent

// A-> B -> c
const BioData = createContext();

const UseContextA = () => {


    return (
    <>
        <BioData.Provider value={"sahil "}>
            <UseContextB/>
        </BioData.Provider>
    </>
  )
}

export default UseContextA;
export {BioData}