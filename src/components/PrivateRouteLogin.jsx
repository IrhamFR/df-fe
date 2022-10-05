import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

function PrivateRouteLogin({isLogged}) {
  return isLogged ? <Outlet /> : <Navigate to='/' />    
}

export default PrivateRouteLogin