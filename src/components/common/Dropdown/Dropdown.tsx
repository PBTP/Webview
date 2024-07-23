import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import styles from './Dropdown.module.scss';
import { ArrowDownNoTail } from '@/icons/icon';
import useOutsideClick from '@/hooks/useOutsideClick';

interface DropdownContextProps {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
  label: string;
  setLabel: React.Dispatch<string>;
}

const DropdownContext = createContext<DropdownContextProps>({
  open: false,
  setOpen: () => false,
  label: '',
  setLabel: () => '',
});

interface DropdownProps {
  children: ReactNode;
  className?: string;
}

const Dropdown = ({ children, className }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState('');
  const providerValue = { open, setOpen, label, setLabel };
  const DropdownRef = useRef(null);
  useOutsideClick(DropdownRef, () => setOpen(false));

  return (
    <DropdownContext.Provider value={providerValue}>
      <div
        ref={DropdownRef}
        className={`${styles.DropdownWrapper} ${className}`}
      >
        {children}
      </div>
    </DropdownContext.Provider>
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
  const { open, setOpen, label } = useContext(DropdownContext);
  return asChild ? (
    <div onClick={() => setOpen(!open)}>{children}</div>
  ) : (
    <button
      className={`${styles.DropdownTrigger} ${label ? styles.Label : ''} ${className}`}
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
  const { open } = useContext(DropdownContext);

  return (
    <ul
      className={`${styles.DropdownPopoverWrapper} ${open ? styles.Open : ''} ${className}`}
    >
      {children}
    </ul>
  );
};

interface PopoverItemProps {
  value: string;
  className?: string;
  onClick?: () => void;
}
const PopoverItem = ({ value, className, onClick }: PopoverItemProps) => {
  const { setLabel, setOpen } = useContext(DropdownContext);
  const handlePopoverItem = () => {
    setLabel(value);
    setOpen(false);
    onClick?.();
  };
  return (
    <li
      className={`${styles.DropdownPopoverItem} ${className}`}
      onClick={handlePopoverItem}
    >
      {value}
    </li>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Popover = Popover;
Dropdown.PopoverItem = PopoverItem;

export default Dropdown;
