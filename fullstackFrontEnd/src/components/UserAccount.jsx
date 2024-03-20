import { Navigate } from "react-router-dom"
function UserAccount({token}) {


    return (
      <>
      {!token && <Navigate to ="/" replace={true}/>}
      <div>
        <h1>User Account</h1>
      </div>

      </>
    )
  }
  
  export default UserAccount
  