import React from 'react'
import { v4 } from 'uuid'

export const ContextTask = React.createContext()

function ContextProvider({ children }) {
    const [backlog, setBacklog] = React.useState(JSON.parse(localStorage.getItem('backlog')) || [])
    const [ready, setReady] = React.useState(JSON.parse(localStorage.getItem('ready')) || [])
    const [inProgress, setInProgress] = React.useState(JSON.parse(localStorage.getItem('inProgress')) || [])
    const [finished, setFinished] = React.useState(JSON.parse(localStorage.getItem('finished')) || [])
    const [showMessage, setShowMessage] = React.useState(false)



    React.useEffect(() => {
        localStorage.setItem('backlog', JSON.stringify(backlog))
        localStorage.setItem('ready', JSON.stringify(ready))
        localStorage.setItem('inProgress', JSON.stringify(inProgress))
        localStorage.setItem('finished', JSON.stringify(finished))
    }, [backlog, ready, inProgress, finished])

    const addNewTask = (valueInput) => {
        setBacklog(prev => [...prev, { id: v4(), name: valueInput, description: "This task has no description", status: 'create' }])
    }

    const moveToReady = (id, item) => {
        const redy = { ...item, status: 'ready' }
        setReady(prev => [...prev, redy])
        setBacklog(prev => prev.filter(item => item.id !== id))
    }

    const moveToProgress = (id, item) => {
        const progress = { ...item, status: 'progress' }
        setInProgress(prev => [...prev, progress])
        setReady(prev => prev.filter(item => item.id !== id))
    }

    const moveToFinished = (id, item) => {
        const finished = { ...item, status: 'finished' }
        setFinished(prev => [...prev, finished])
        setInProgress(prev => prev.filter(item => item.id !== id))
    }

    const value = {
        backlog,
        ready,
        inProgress,
        finished,
        showMessage,
        setBacklog,
        setReady,
        setInProgress,
        setFinished,
        addNewTask,
        moveToReady,
        moveToProgress,
        moveToFinished,
        setShowMessage
    }

    return (
        <ContextTask.Provider value={value}>
            {children}
        </ContextTask.Provider>
    )
}

export default ContextProvider
