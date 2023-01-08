import React ,{useReducer} from 'react'

const initialState = 0;

// state = currState;
const reducer = (state, action)=>{
    if(action.type==='increment'){
        console.log(state,action);

        return state+1;
        
    }
    else if(action.type==='decrement'){
        if(state>0){
            
            console.log(state,action);
            return state-1;
        }
    }
    return state;
}


const UseReducerHook = () => {
    // const [count, setCount] = useState(0);
    // useReducer(reducer, initialState);

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
            <>
                <h1>{state}</h1>
                <div>
                    <button onClick={()=>dispatch({type:'increment'})}>Inc</button>
                    <button onClick={()=>dispatch({type:'decrement'})}>dec</button>
                    

                </div>
            </>
    )
}

export default UseReducerHook