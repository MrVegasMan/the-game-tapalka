import { useState } from 'react';

import { oferCard } from '@/mocs/index.ts';

import Modal from '@components/common/Modal';
import OfferCard from '@components/Offer/OfferCard.tsx';

function Offerwall() {
    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    const [pageTitle] = useState('Get more IQ points');

    return (
        <>
            <div>
                {isModalActive && (
                    <Modal onClose={handleModalClose} title={<h2>CONNECT WALLET</h2>}>
                        <div>
                            <h2>Hello world</h2>
                            <button>
                                <p className="button-text">I don’t have a Wallet</p>
                            </button>
                        </div>
                    </Modal>
                )}
            </div>
            <div>
                <h1 className="display-450-accent">{pageTitle}</h1>
                {oferCard.map((task) => (
                    <OfferCard data={task} key={task.id} />
                ))}
                <button onClick={handleModalOpen}>open modal</button>
            </div>
        </>
    )
    ;
}

export default Offerwall;
