import { useContext }  from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const context = useContext(UserContext)
  
  if (!context) {
    return <div>Error: UserContextProvider is missing!</div>
  }

  const { user, setUser } = context
  if (!user) return "not logged in"
  
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <h1>Profile : { user.username }</h1>
      <button onClick = {handleLogout}>LogOut</button>
    </div>
    
  )
}

export default Profile