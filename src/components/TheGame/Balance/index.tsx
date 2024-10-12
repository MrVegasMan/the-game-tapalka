import styles from './index.module.css';

const Balance = () => {
    return (
        <>
            <div className={`${styles.balanceW}`}>
                <p className="display-500-accent">
                    🧠
                    {' '}
                    8 546
                </p>
                <div className="flex flex-row gap-12px compact-300-accent">
                    <p>
                        🧠
                        {' '}
                        <span>8 546</span>
                        {' '}
                        / Answer
                    </p>
                    <p>
                        🧠
                        {' '}
                        <span>512.7k</span>
                        {' '}
                        / Hour
                    </p>
                </div>
            </div>
            <div className="p-lr-spacing-350"> dsf</div>
        </>
    );
};

export default Balance;
