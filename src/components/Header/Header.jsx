import React from 'react'

import arrowDown from '../../img/arrowdown.svg'
import userAvatar from '../../img/user-avatar.png'

import classes from './Header.module.css'

function Header() {
    const [showMenu, setShowMenu] = React.useState(false)
    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Awesome Kanban Board</h1>
            <button onClick={() => setShowMenu(!showMenu)} className={classes.profile}>
                <div className={classes.profileAvatar}>
                    <img src={userAvatar} alt="user avatar" />
                </div>
                <div className={showMenu ? classes.arrow : ''}>
                    <img src={arrowDown} alt="arrow down" />
                </div>
            </button>
            {showMenu && <div className={classes.userMenu}>
                <div className={classes.figure}></div>
                <ul>
                    <li>Profile</li>
                    <li>Lgg Out</li>
                </ul>
            </div>}
        </header>
    )
}

export default Header