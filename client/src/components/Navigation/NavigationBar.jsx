import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import CookiesMessage from './CookiesMessage'
import styles from './NavigationBar.module.scss'

import lightThemeIcon from '../../assets/images/theme-light.svg'
import darkThemeIcon from '../../assets/images/theme-dark.svg'
import userIcon from '../../assets/images/user-astronaut.svg'

export default ({ theme, user, changeTheme }) => {
  const [showCookiesMessage, setShowCookiesMessage] = useState(true)

  return (
    <>
      <nav className={styles.navBar}>
        <img
          className={`${styles.theme} ${theme === 'dark' ? styles.themeDark : ''}`}
          src={theme === 'light' ? lightThemeIcon : darkThemeIcon}
          alt="Theme"
          title="Theme"
          onClick={changeTheme}
        />

        <NavLink className={styles.notes} activeClassName={styles.active} exact to="/">
          Notes
        </NavLink>

        {user.name ? (
          <NavLink
            className={styles.auth}
            activeClassName={styles.active}
            title={`Logged in as ${user.name}`}
            to={'/account'}
          >
            <img
              className={`${styles.user} ${theme === 'dark' ? styles.userDark : ''}`}
              src={userIcon}
              alt={user.name}
            />
          </NavLink>
        ) : (
          <NavLink className={styles.auth} activeClassName={styles.active} title={'Login'} to={'/auth'}>
            {'Login'}
          </NavLink>
        )}
      </nav>

      {showCookiesMessage && !user.name && (
        <CookiesMessage theme={theme} toggle={mode => setShowCookiesMessage(mode)} />
      )}
    </>
  )
}
