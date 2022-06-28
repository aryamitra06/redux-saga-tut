import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './redux/actions/users'
import { getPost } from './redux/actions/post'
function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const users = useSelector(state => state.users);
  const post = useSelector(state => state.post);



  const handlePost = () => {
    dispatch(getPost(3))
  }

  return (
    <>
      <h1>Hello Saga!</h1>
      <button onClick={handlePost}>FETCH USER ID = 3 POST DATA</button>
      <h1>USER DATA</h1>
      {
        (!users?.users?.data?.[0]?.name) ? (
          <>
            <h2>Loading...</h2>
          </>
        ) : (
          <h2>{users?.users?.data?.[0]?.name}</h2>
        )
      }
      <hr></hr>
      <h1>POST DATA FOR ID = 3</h1>
      {
        !post?.post?.data?.title ? (
          <h2>Click the button to display data...</h2>
        ) : (
          <h2>{post?.post?.data?.title}</h2>
        )
      }

    </>
  )
}

export default App
