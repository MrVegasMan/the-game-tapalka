import './AppFooter.scss';

import { useNavigate } from 'react-router-dom';

import { ButtonFooter } from '../Button/ButtonFooter.tsx';

export function AppFooter() {
    const navigate = useNavigate();

    const goLeaderBoardPage = () => {
        navigate('/leaderboard');
    };
    const goOfferwallPage = () => {
        navigate('/offerwall');
    };
    const goTheGame = () => {
        navigate('/thegame');
    };
    const goBoostersPage = () => {
        navigate('/boosters');
    };
    const goFriendsPage = () => {
        navigate('/friends');
    };

    return (
        <nav className="app-footer flex flex-row justify-between items-end">
            <ButtonFooter onClick={goLeaderBoardPage} footerBtnTitle="Leaders">
                <span>
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 26.8334C21.0876 26.8334 26.8333 21.0877 26.8333 14.0001C26.8333 6.91243 21.0876 1.16675 14 1.16675C6.91234 1.16675 1.16666 6.91243 1.16666 14.0001C1.16666 21.0877 6.91234 26.8334 14 26.8334ZM3.49999 14.0001C3.49999 20.5419 24.5 20.5419 24.5 14.0001C24.5 8.59544 20.4166 4.14452 15.1667 3.56416V8.29952C16.526 8.61984 17.5 9.48413 17.5 10.5001C17.5 11.7887 15.933 12.8334 14 12.8334C12.067 12.8334 10.5 11.7887 10.5 10.5001C10.5 9.48413 11.4739 8.61984 12.8333 8.29952V3.56416C7.58338 4.14452 3.49999 8.59544 3.49999 14.0001Z"
                        />
                    </svg>
                </span>
            </ButtonFooter>
            <ButtonFooter onClick={goOfferwallPage} footerBtnTitle="Offerwall">
                <span>
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.5163 8.48372C24.5055 9.40131 28 11.5258 28 14C28 16.4742 24.5055 18.5987 19.5163 19.5163C18.5987 24.5055 16.4742 28 14 28C11.5258 28 9.4013 24.5055 8.48372 19.5163C3.49451 18.5987 0 16.4742 0 14C0 11.5258 3.49451 9.40131 8.48372 8.48372C9.4013 3.49451 11.5258 0 14 0C16.4742 0 18.5987 3.49451 19.5163 8.48372Z"
                        />
                    </svg>
                </span>
            </ButtonFooter>
            <ButtonFooter onClick={goTheGame} footerBtnTitle="Home">
                <span
                    className="footer-home-ico-w relative bg-brand-high rounded-full bg-cover"
                />
            </ButtonFooter>
            <ButtonFooter onClick={goBoostersPage} footerBtnTitle="Boosters">
                <span>
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.16666 12.8333C1.16666 5.74568 6.91234 0 14 0C21.0876 0 26.8333 5.74568 26.8333 12.8333V28H23.3333L22.1667 16.3333H5.83332L4.66666 28H1.16666V12.8333ZM16.3333 9.33333C16.3333 10.622 15.2887 11.6667 14 11.6667C12.7113 11.6667 11.6667 10.622 11.6667 9.33333C11.6667 8.04467 12.7113 7 14 7C15.2887 7 16.3333 8.04467 16.3333 9.33333Z"
                        />
                        <path d="M6.99999 28H21L18.6667 19.8333H9.33332L6.99999 28Z" />
                    </svg>
                </span>
            </ButtonFooter>
            <ButtonFooter onClick={goFriendsPage} footerBtnTitle="Friends">
                <span>
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.6667 6.99992C18.6667 9.57725 16.5773 11.6666 14 11.6666C11.4227 11.6666 9.33333 9.57725 9.33333 6.99992C9.33333 4.42259 11.4227 2.33325 14 2.33325C16.5773 2.33325 18.6667 4.42259 18.6667 6.99992Z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.6667 23.3333V16.3333C18.6667 13.7559 16.5773 11.6666 14 11.6666C11.4227 11.6666 9.33333 13.7559 9.33333 16.3333V18.6666C9.33333 16.0893 7.244 13.9999 4.66667 13.9999C2.08934 13.9999 0 16.0893 0 18.6666C0 21.2439 2.08934 23.3333 4.66667 23.3333C2.08934 23.3333 0 25.4226 0 27.9999H9.33333H28V23.3333C28 20.7559 25.9107 18.6666 23.3333 18.6666C25.9107 18.6666 28 16.5772 28 13.9999C28 11.4226 25.9107 9.33325 23.3333 9.33325C20.756 9.33325 18.6667 11.4226 18.6667 13.9999C18.6667 16.5772 20.756 18.6666 23.3333 18.6666C20.756 18.6666 18.6667 20.7559 18.6667 23.3333ZM9.33333 27.9999C9.33333 25.4226 7.244 23.3333 4.66667 23.3333C7.244 23.3333 9.33333 21.2439 9.33333 18.6666V27.9999Z"
                        />
                    </svg>
                </span>
            </ButtonFooter>
        </nav>
    );
}
