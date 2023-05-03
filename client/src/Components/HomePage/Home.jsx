import React from 'react'
import SearchSection from './SearchSection'
import { Outlet } from 'react-router-dom'
// import Login from './Login'
const Home = () => {
  return (
    <div>
      {/* <Form></Form> */}
      <SearchSection></SearchSection>
      <Outlet />
      {/* <Login></Login> */}
    </div>
  )
}

export default Home
