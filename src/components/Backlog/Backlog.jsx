import React from 'react'

import classes from './Backlog.module.css'
import addCardIcon from '../../img/add-card.svg'


function Backlog({ children, title, addNewTask }) {
    const [showInput, setShowInput] = React.useState(false)
    const [valueInput, setValueInput] = React.useState('')

    const handleShowInput = () => {
        setShowInput(prev => prev = !showInput)
    }

    const changeInput = (e) => {
        setValueInput(e.target.value)
    }

    const handleClickBtn = () => {
        addNewTask(valueInput)
        setValueInput('')
        setShowInput(false)
    }


    return (
        <section className={classes.taskWrapper}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.tasks}>
                {children}
                {showInput && <div className={classes.input}>
                    <input value={valueInput} onChange={changeInput} />
                </div>
                }

                {showInput ? (<button disabled={valueInput === ''} onClick={handleClickBtn} className={classes.btn_submit}>
                    <p>Submit</p>
                </button>) : (<button onClick={handleShowInput} className={classes.btn}>
                    <img src={addCardIcon} alt="add card" />
                    <p>Add card</p>
                </button>)}
            </div>


        </section>
    )
}

export default Backlog