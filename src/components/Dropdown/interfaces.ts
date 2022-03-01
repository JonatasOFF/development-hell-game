export interface DropdownProps {
  label: string;
  placeholder?: string;
  value: string;
  list?: string[];

  onChange?: (event: string) => void;
}

export interface DropdownStyleProps {
  open?: boolean;
}
