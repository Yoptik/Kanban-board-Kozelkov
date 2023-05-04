import React from 'react'
import classes from './Finished.module.css'
import addCardIcon from '../../img/add-card.svg'
import popupArrow from '../../img/popup-arrow.svg'


function Finished({ children, title, inProgress, moveToFinished }) {
    const [showPopup, setShowPopup] = React.useState(false)

    const handleShowPopup = () => {
        setShowPopup(prev => prev = !showPopup)
    }

    const handleClickItem = (id, item) => {
        moveToFinished(id, item)
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
                                {inProgress.map(item => (
                                    <li key={item.id} onClick={() => handleClickItem(item.id, item)} className={classes.popupItem}>{item.name}</li>
                                ))}
                            </ul>
                        </>
                    ) : (<button disabled={inProgress.length === 0} onClick={handleShowPopup} className={classes.btn}>
                        <img src={addCardIcon} alt="add card" />
                        <p>Add card</p>
                    </button>)}
                </div>
            </div>

        </section>
    )
}

export default Finished