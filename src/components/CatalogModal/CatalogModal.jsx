import ReactModal from 'react-modal';
import css from './CatalogModal.module.css';
import Features from '../Features/Features';
import { useState } from 'react';
import Reviews from '../Reviews/Reviews';
import clsx from 'clsx';
import sprite from "../../sprite/sprite.svg"
import { IoStarSharp } from 'react-icons/io5';

function CatalogModal({ item, closeModal, isOpen }) {
    const [openFeatures, setOpenFeatures] = useState(false);
    const [openReviews, setOpenReviews] = useState(false)

    const handleOpen = () => {
        setOpenFeatures((prevOpenFeatures) => !prevOpenFeatures)
        setOpenReviews(false)
    }

    const handleReviewsOpen = () => {
        setOpenReviews((prevOpenReviews) => !prevOpenReviews)
        setOpenFeatures(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '982px',
            height: '80vh',
            borderRadius: '20px',
            padding: '40px',
            overflowY: 'auto',
        },
        overlay: {
            backgroundColor: 'rgba(17, 18, 19, 0.4)',
        },
    };

    if (!item) return null;

    console.log(item)
    return (
        <div className={css.reactModal}>
            <ReactModal
                isOpen={isOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                style={customStyles}
            >
                <div className={css.container}>
                    <div className={css.navBar}>
                    <h2 className={css.title}>{item.name}</h2>
                    <button type="button" className={css.button} onClick={closeModal}>
                        <svg width="32" height="32">
                            <use stroke='black' href={`${sprite}#icon-Rating-1`}></use>
                        </svg>
                    </button>
                    </div>
                    <div className={css.rateAndLocal}>
                        <p className={css.rating}><span className={css.rateSpan}><IoStarSharp fill="yellow" stroke="yellow" size='16px' /></span>{item.rating}({item.reviews.length}Reviews)</p>
                        <p className={css.location}>{item.location}</p>
                    </div>
                    <h3 className={css.title}>€{item.price}</h3>
                    <div className={css.blockImages}>
                        {item.gallery.map(img => {
                            return <img className={css.img} src={img} />
                        })}
                    </div>
                    <p className={css.text}>{item.description}</p>
                    <div className={css.btnBlock}>
                        <button className={clsx(css.btnF, openFeatures === true ? css.btnSelectedF : '')} onClick={handleOpen} type='button'>Features</button>
                        <button className={clsx(css.btnR, openReviews === true ? css.btnSelectedR : '')} onClick={handleReviewsOpen} type='button'>Reviews</button>
                    </div>
                    <hr />
                    <Features open={openFeatures} item={item} />
                    <Reviews openReviews={openReviews} item={item} />
                </div>
            </ReactModal>
        </div>
    );
}

export default CatalogModal;
