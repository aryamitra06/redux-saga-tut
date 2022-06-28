import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from './redux/actions/users'
import {getPost} from './redux/actions/post'
function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getUsers())
    dispatch(getPost(3))
  }, [])
  
  const users = useSelector(state => state.users);
  const post = useSelector(state=> state.post);


  console.log("users data", users);
  console.log("post data", post);

  return (
    <>
    <h1>Hello Saga!</h1>
    <button>FETCH USER ID 1 POST DATA</button>
    </>
  )
}

export default App
