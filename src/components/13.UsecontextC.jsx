import React , {useContext} from 'react'
import { BioData } from './13.UseContextA'





const UsecontextC = () => {

    const name = useContext(BioData);
  return (
        <>
            <h1>My name is {name}</h1>
        </>
  )
}

export default UsecontextC