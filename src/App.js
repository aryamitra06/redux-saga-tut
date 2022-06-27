import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from './redux/actions/users'
function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getUsers())
  }, [])
  
  const users = useSelector(state => state.users);

  console.log(users);

  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}

export default App
