import React from 'react'
import { useEffect , useState} from 'react'

const UseEffectApi = () => {

    const [users, setUsers] = useState([])

    const getUsers = async()=>{

        try{

            const response = await fetch('https://api.github.com/users');
            // const data = await response.json();
            setUsers(await response.json());
            // console.log(data)
        }
        catch(err){
            console.log(err);
        }
        
    }

    useEffect(
        ()=>{
            getUsers();
        },[]
    )
    
    return (
        <>
        <h1>UseEffectApi</h1>
        <div className="container">
            <div className="row">
                    {
                        
                        users.map(
                            (i)=>{
                                return (
                                    <>
                                    <div className="card">
                
                                        <div className="left">
                                            <img src={i.avatar_url} alt="nhi hai" />
                                        </div>
                                        <div className="right">
                                            <div className="name">
                                                <h3>{i.login}</h3>
                                            </div>
                                            <div className="designation">
                                                <span>Web DEV</span>
                                            </div>
                                            <div className="info">
                                                <div className="articles">
                                                    <h5>Articles</h5>
                                                    <span>34</span>
                                                </div>
                                                <div className="followers">
                                                    <h5>Followers</h5>
                                                    <span>89</span>
                                                </div>
                                                <div className="Ratings">
                                                    <h5>Ratings</h5>
                                                    <span>34</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                    }

            </div>
        </div>
    </>
  )
}

export default UseEffectApi