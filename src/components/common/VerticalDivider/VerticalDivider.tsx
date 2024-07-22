import styles from './VerticalDivider.module.scss';

interface VerticalDividerProps {
  height: number;
}
const VerticalDivider = ({ height }: VerticalDividerProps) => {
  return <div style={{ height }} className={styles.VerticalDivider} />;
};

export default VerticalDivider;
