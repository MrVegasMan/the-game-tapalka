import React from 'react';

import CloseIcon from '@assets/ico/close.svg';

import styles from './index.module.scss';

interface ButtonClose {
    onClick: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

export function ButtonClose({ onClick }: ButtonClose) {
    return (
        <button onClick={onClick} className={`rounded-full p-8 ${styles.btn_close}`}>
            <span className="ico-16px">
                <CloseIcon />
            </span>
        </button>
    );
}
