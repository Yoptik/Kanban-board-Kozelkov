import React from 'react'
import closeBtn from '../../img/close-btn.svg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { ContextTask } from '../../context/ContextProvider'


import classes from './Task.module.css'

function Task() {
    const par = useParams()
    const { backlog, ready, inProgress, finished } = React.useContext(ContextTask)
    const { setBacklog, setReady, setInProgress, setFinished } = React.useContext(ContextTask)
    const { setShowMessage } = React.useContext(ContextTask)
    const currentTask = [...backlog, ...ready, ...inProgress, ...finished].find(item => item.id === par.id)
    const [name, setName] = React.useState(currentTask.name)
    const [description, setDescription] = React.useState(currentTask.description)

    const handleClickbtn = (e) => {
        const newTask = { ...currentTask, name, description }

        switch (currentTask.status) {
            case 'create': {
                if (window.confirm('Вы действительно хотите изменить задачу?')) {
                    setBacklog(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                    setShowMessage(prev => !prev)
                }
                break;
            }
            case 'ready': {
                if (window.confirm('Вы действительно хотите изменить задачу?')) {
                    setReady(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                    setShowMessage(prev => !prev)
                }
                break;
            }
            case 'progress': {
                if (window.confirm('Вы действительно хотите изменить задачу?')) {
                    setInProgress(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                    setShowMessage(prev => !prev)
                }
                break;
            }
            case 'finished': {
                if (window.confirm('Вы действительно хотите изменить задачу?')) {
                    setFinished(prev => [...prev].map(item => item.id === currentTask.id ? item = newTask : item))
                    setShowMessage(prev => !prev)
                }
                break;
            }
        }
    }

    return (
        <section className={classes.task}>
            <div className={classes.task__info}>
                <input className={classes.task__title} value={name} onChange={(e) => setName(e.target.value)} />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className={classes.task__description}
                    value={description}
                ></textarea>
                <Link to='/' className={classes.close_btn}>
                    <img src={closeBtn} alt="close button" />
                </Link>
                <div className={classes.btn_wrapper}>
                    <Link to='/' className={classes.btn_submit} onClick={handleClickbtn}>submit</Link>
                </div>
            </div>

        </section>
    )
}

export default Task