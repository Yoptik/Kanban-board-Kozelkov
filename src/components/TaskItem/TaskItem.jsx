import React from 'react'
import { Link } from 'react-router-dom'
import classes from './TaskItem.module.css'
function TaskItem({ item }) {
    return (
        <Link to={`/task/${item.id}`} className={classes.task}>
            <p>{item?.name}</p>
        </Link>
    )
}

export default TaskItem