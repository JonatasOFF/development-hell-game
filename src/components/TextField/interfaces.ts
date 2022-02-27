import { FunctionComponent, SVGProps, ReactNode } from 'react';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>> | ReactNode;
  onChange?: (event: string) => void;
}
