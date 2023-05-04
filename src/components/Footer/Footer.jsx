import React from 'react'
import { ContextTask } from '../../context/ContextProvider'
import classes from './Footer.module.css'

function Footer() {

    const { backlog, finished } = React.useContext(ContextTask)

    return (
        <footer className={classes.footer}>
            <div className={classes.canbanInfo}>
                <div className={classes.activeTasks}>
                    <p>Active tasks: {backlog.length}</p>
                </div>
                <div className={classes.finishedTasks}>
                    <p>Finished tasks: {finished.length}</p>
                </div>
            </div>

            <div className={classes.by}>
                <p>Kanban board by <span>Kozelkov Ivan, {new Date().getFullYear()}</span></p>
            </div>
        </footer>
    )
}

export default Footer