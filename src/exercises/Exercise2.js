import React , {useState ,useEffect} from 'react'
import axios from 'axios'

export default function Exercise2() {
  // your code here
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results)
  })
  },[])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((user) => (
          <div> 
            <img src={user.picture.thumbnail} alt=""></img>
            <div className='name'>{user.name.first} {user.name.last}</div>
          </div>
        ))}
      </div>
    </div>
  )
}