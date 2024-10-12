import { ReactNode } from 'react';

interface ButtonBig {
    children: ReactNode;
    footerBtnTitle: string;
    onClick: () => void;
}

export function ButtonFooter({ children, footerBtnTitle, onClick }: ButtonBig) {
    return (
        <button onClick={onClick} className="p-17 rounded-12">
            {children}
            <p className="compact-200-accent">{footerBtnTitle}</p>
        </button>
    );
}
