import React from 'react'
import { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([])

    
    const changeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const changePassword = (e)=>{
        setPassword(e.target.value)
    }
    function submitForm(e){
        e.preventDefault();

        if(!email || !password){

        }
        else{

            const newEntry = {
                id:new Date().getTime().toString(),
                email:email, 
                password:password,
            } 
            setEmail('');
            setPassword('');
            setAllEntry([...allEntry, newEntry]);
        }
    }

    
  return (
    <>
        <h1>LoginForm</h1>
        
        <form action="" onSubmit={submitForm}>
            <div className="">
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' autoComplete='off' value={email} onChange={changeEmail} />
            </div>

            <div className="">
                <label htmlFor="password">Password</label>                
                <input type="password" name='password' id='password' value={password}  onChange={changePassword}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        {
            allEntry.map((i)=>{
                const {id, email,password} = i;
                return (
                    <div  className="" key={id}>

                        <h1 >{email}</h1>
                        <h1 >{password}</h1>
                    </div>
                    
                )
            })
        }


        <h1>-----------------------------</h1>
    </>
  )
}

export default LoginForm