import './ButtonFooter.scss';

import { ReactNode } from 'react';

interface ButtonFooterProps {
    children: ReactNode;
    footerBtnTitle: string;
    onClick: () => void;
}

export function ButtonFooter({ children, footerBtnTitle, onClick }: ButtonFooterProps) {
    return (
        <button type="button" onClick={onClick} className="app-footer-link flex flex-col gap-4px items-center grow">
            {children}
            <p className="compact-200-accent">{footerBtnTitle}</p>
        </button>
    );
}
