import './InviteFriends.scss';

import React, { useRef, useState } from 'react';

interface InviteFriendsProps {
    addWrapperClassName?: string; // Опциональный проп для класса кнопки "Copy"
}

const InviteFriends: React.FC<InviteFriendsProps> = ({ addWrapperClassName }) => {
    const [referralLink] = useState('https://memecoin.io/jdfjkknmn');
    const inputRef = useRef<HTMLInputElement>(null);

    const copyToClipboard = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(referralLink);
                alert('Referral link copied!');
            }
            else if (inputRef.current) {
                // Для небезопасного контекста: выделить и предложить пользователю скопировать вручную
                inputRef.current.select();
                alert('Press Ctrl+C (Cmd+C on Mac) to copy the referral link.');
            }
        }
        catch (error) {
            console.error('Failed to copy the text to clipboard:', error);
            alert('Failed to copy the referral link. Please try again.');
        }
    };

    const inviteFriends = () => {
        alert('Invite friends functionality triggered!');
    };

    return (
        <div className={`flex flex-col gap-8px ${addWrapperClassName || ''}`}>
            <h3 className="compact-250-numeric text-content-neutral-secondary text-left px-12">Your referral link</h3>
            <div className="referral-link-container bg-neutral-low rounded-12 relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={referralLink}
                    readOnly
                    className="compact-350-default referral-link-input size-full rounded-12 px-16 py-12"
                />
                <button onClick={copyToClipboard} className="copy-button flex items-center justify-center absolute">

                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.0174 7.05373L12.9463 -0.0173335L7.05373 5.87522L8.23224 7.05373L12.9463 2.33969L17.6603 7.05373L12.9463 11.7678L14.1248 12.9463L20.0174 7.05373ZM11.7678 7.05373L12.9463 8.23225L8.23224 12.9463L7.05373 11.7678L11.7678 7.05373ZM7.05375 20.0174L-0.0173169 12.9463L5.87524 7.05375L7.05375 8.23226L2.33971 12.9463L7.05375 17.6604L11.7678 12.9463L12.9463 14.1248L7.05375 20.0174Z"
                        />
                    </svg>

                </button>
            </div>
            <button
                onClick={inviteFriends}
                className="bg-brand-high compact-350-accent text-content-static-dark-primary py-12 rounded-16"
            >
                Invite friends
            </button>
        </div>
    );
};

export default InviteFriends;
