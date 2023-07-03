import styles from './Container.module.scss';

const Container = props => {
    return (
        <div classname={styles.container}>{props.children}</div>
    );
};

export default Container;