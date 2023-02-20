import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUsers } from './userSlice';

const UserView = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user) //user is initial state inside the userSlice.
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  return (
    <div>
      <h2>List of users - </h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default UserView
