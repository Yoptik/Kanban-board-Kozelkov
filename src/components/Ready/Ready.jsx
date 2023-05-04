import React from 'react'
import classes from './Ready.module.css'
import addCardIcon from '../../img/add-card.svg'
import popupArrow from '../../img/popup-arrow.svg'


function Ready({ children, title, backlog, moveToReady }) {
    const [showPopup, setShowPopup] = React.useState(false)

    const handleShowPopup = () => {
        setShowPopup(prev => prev = !showPopup)
    }

    const handleClickItem = (id, item) => {
        moveToReady(id, item)
    }

    return (
        <section className={classes.taskWrapper}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.tasks}>
                {children}
                <div className={classes.popupWrapper}>
                    {showPopup ? (
                        <>
                            <div onClick={handleShowPopup} className={classes.popupBlock}>
                                <img src={popupArrow} alt='popup arrow' />
                            </div>
                            <ul className={classes.popup}>
                                {backlog.map(item => (
                                    <li key={item.id} onClick={() => handleClickItem(item.id, item)} className={classes.popupItem}>{item.name}</li>
                                ))}
                            </ul>
                        </>
                    ) : (<button onClick={handleShowPopup} disabled={backlog.length === 0} className={classes.btn}>
                        <img src={addCardIcon} alt="add card" />
                        <p>Add card</p>
                    </button>)}
                </div>
            </div>

        </section>
    )
}

export default Ready