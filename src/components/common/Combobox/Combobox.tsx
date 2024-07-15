import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import styles from './Combobox.module.scss';
import { ArrowDownNoTail } from '@/icons/icon';
import useOutsideClick from '@/hooks/useOutsideClick';

interface ComboboxContextProps {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
  label: string;
  setLabel: React.Dispatch<string>;
}

const ComboboxContext = createContext<ComboboxContextProps>({
  open: false,
  setOpen: () => false,
  label: '',
  setLabel: () => '',
});

interface ComboboxProps {
  children: ReactNode;
}

const Combobox = ({ children }: ComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState('');
  const providerValue = { open, setOpen, label, setLabel };

  return (
    <ComboboxContext.Provider value={providerValue}>
      <div className={styles.ComboboxWrapper}>{children}</div>
    </ComboboxContext.Provider>
  );
};

interface TriggerProps {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
  placeholder?: string;
}
const Trigger = ({
  asChild,
  children,
  className,
  placeholder,
}: TriggerProps) => {
  const { open, setOpen, label } = useContext(ComboboxContext);
  return asChild ? (
    <div onClick={() => setOpen(!open)}>{children}</div>
  ) : (
    <button
      className={`${styles.ComboboxTrigger} ${label ? styles.Label : ''} ${className}`}
      onClick={() => setOpen(!open)}
    >
      {label ? label : placeholder}
      <ArrowDownNoTail
        width={12}
        height={7}
        className={`${styles.DownArrow} ${open ? styles.Active : ''}`}
      />
    </button>
  );
};

interface PopoverProps {
  children: ReactNode;
  className?: string;
}
const Popover = ({ children, className }: PopoverProps) => {
  const { open } = useContext(ComboboxContext);

  return (
    <ul
      className={`${styles.ComboboxPopoverWrapper} ${open ? styles.Open : ''} ${className}`}
    >
      {children}
    </ul>
  );
};

interface PopoverItemProps {
  value: string;
  className?: string;
}
const PopoverItem = ({ value, className }: PopoverItemProps) => {
  const { setLabel, setOpen } = useContext(ComboboxContext);
  const handlePopvoerItem = () => {
    setLabel(value);
    setOpen(false);
  };
  return (
    <li
      className={`${styles.ComboboxPopoverItem} ${className}`}
      onClick={handlePopvoerItem}
    >
      {value}
    </li>
  );
};

Combobox.Trigger = Trigger;
Combobox.Popover = Popover;
Combobox.PopoverItem = PopoverItem;

export default Combobox;
