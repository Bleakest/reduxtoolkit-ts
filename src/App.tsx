import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch()
  const {error,isLoading,users} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  return (
    <div className="App">
      {isLoading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      <div>{users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}</div>
    </div>
  );
}

export default App;
