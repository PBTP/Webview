import styles from './Divider.module.scss';

type DividerProps = {
  className?: string;
};
const Divider = ({ className }: DividerProps) => {
  return <div className={`${styles.Divider} ${className}`} />;
};

export default Divider;
