import React from 'react'
import { Button } from "@material-ui/core"

function Auth({ login }: { login: any }) {

  return (
    <div>
      <h1 className="">Welcome to GRE flash carder</h1>
      <Button onClick={ login } color="primary" variant="contained" style={ {} } >Login</Button>
    </div>
  )
}

export default Auth
