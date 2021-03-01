import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil'

import { ws } from 'websocket-connection'
import { authIsVisibleState, userState, notesState, listsState, filesState } from 'atoms'
import { EMPTY_IMAGE } from 'global-constants'
import { LOGOUT } from './constants'
import { If, Backdrop } from 'components'
import { Wrapper, UserLogo, Name, ErrorMessage, Input, Submit, ChangePassword } from './style'

const { REACT_APP_SERVER_URL = 'http://localhost:5000' } = process.env

const User = () => {
  const [user, setUser] = useRecoilState(userState)
  const resetAuthIsVisible = useResetRecoilState(authIsVisibleState)
  const setNotes = useSetRecoilState(notesState)
  const setLists = useSetRecoilState(listsState)
  const resetFiles = useResetRecoilState(filesState)

  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState('')
  const [changePasswordMode, setChangePasswordMode] = useState(false)
  const [newPassword, setNewPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'visible')
  }, [])

  const changePassword = async event => {
    event.preventDefault()

    setError()
    setLoading(true)

    const body = JSON.stringify({ password, newPassword })

    const res = await fetch(`${REACT_APP_SERVER_URL}/change-password`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer=${localStorage.token}` },
      body
    })

    if (res.ok) return resetAuthIsVisible(false)

    setError(error)
    setLoading(false)
  }

  const logout = async () => {
    setLoading(true)

    try {
      await fetch(`${REACT_APP_SERVER_URL}/logout`, { method: 'POST' })

      localStorage.removeItem('user')
      localStorage.removeItem('userNotes')
      localStorage.removeItem('userLists')
      localStorage.removeItem('token')

      setUser({ name: null })
      setNotes(JSON.parse(localStorage.notes || '[]'))
      setLists(JSON.parse(localStorage.lists || '[]'))
      resetFiles()
      resetAuthIsVisible(false)

      ws.close()
      ws.destroy()
    } catch (err) {
      setError('Failed to logout')
      setLoading(false)
    }
  }

  return (
    <>
      <Backdrop onClick={resetAuthIsVisible} />

      <Wrapper>
        <UserLogo src={EMPTY_IMAGE} alt="User" />

        <Name
          value={name}
          onChange={event => setName(event.target.value)}
          onBlur={async () => {
            await ws.json({ type: 'updateUser', newName: name })
            setUser({ name })
          }}
        />

        <If condition={error}>
          <ErrorMessage>{error}</ErrorMessage>
        </If>

        {changePasswordMode ? (
          <form onSubmit={changePassword}>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              minLength="8"
              required
              onChange={event => setPassword(event.target.value)}
            />

            <Input
              type="password"
              value={newPassword}
              placeholder="New Password"
              minLength="8"
              onChange={event => setNewPassword(event.target.value)}
            />

            <Submit type="submit" disabled={loading} />
          </form>
        ) : (
          <>
            <ChangePassword onClick={() => setChangePasswordMode(true)}>Change Password</ChangePassword>

            <Submit type="submit" value={LOGOUT} disabled={loading} onClick={logout} />
          </>
        )}
      </Wrapper>
    </>
  )
}

export default User
