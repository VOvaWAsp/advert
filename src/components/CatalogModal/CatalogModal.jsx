import ReactModal from 'react-modal';
import css from './CatalogModal.module.css';
import Features from '../Features/Features';
import { useState } from 'react';

function CatalogModal({ item, closeModal, isOpen }) {
    const [openFeatures, setOpenFeatures] = useState(false);

    const handleOpen = () => {
        setOpenFeatures(!openFeatures)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    if (!item) return null;

    console.log(item)
    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                style={customStyles}
            >
                <div className={css.container}>
                    <div>
                    <h2>{item.name}</h2>
                    <button type="button" className={css.button} onClick={closeModal}>
                        Close Modal
                    </button>
                    </div>
                    <div>
                        <h3>{item.rating}</h3>
                        <h3>{item.location}</h3>
                    </div>
                    <p>€{item.price}</p>
                    <div>
                        {item.gallery.map(img => {
                            return <img width='200px' src={img} />
                        })}
                    </div>
                    <p>{item.description}</p>
                    <div>
                        <button onClick={handleOpen} type='button'>Features</button>
                    </div>
                    <Features open={openFeatures} item={item} />
                </div>
            </ReactModal>
        </div>
    );
}

export default CatalogModal;
