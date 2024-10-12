import './UserScore.scss';

export function UserScore() {
    return (
        <div
            className="user-score bg-layer-floor-1 p-8 flex flex-row justify-between"
        >
            <div
                className="user-avatar-name-w flex flex-row items-center gap-8px rounded-full"
            >
                <div
                    className="user-avatar rounded-full overflow-hidden bg-brand-high"
                >
                    <img
                        className="size-full"
                        src="/src/assets/images/wojak.svg"
                        alt="User Avatar"
                    />
                </div>
                <p className="compact-300-accent">@malamuth</p>
            </div>

            <div
                className="user-score-w self-center px-10 py-5 bg-positive-high rounded-8 "
            >
                <p
                    className="compact-300-accent-numeric text-content-static-dark-primary"
                >
                    8546 🧠
                </p>
            </div>
        </div>
    );
}
