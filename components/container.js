import styles from './container.module.scss'

const Container = ({ children }) => {
    return <div className={styles.conatiner}>{children}</div>
}
export default Container