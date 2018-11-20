import { TextField } from "@material-ui/core";
import * as React from "react";

/**
 * Input Props
 */
interface Props {
  id: string;
  label: string;
  type: string;
  name: string;
  value: any;
  error?: string | null;
  onBlur: (e: any) => void;
  onChange: (e: React.ChangeEvent<any>) => void;
}

/**
 * Input Component
 */
export const Input: React.SFC<Props> = ({
  id,
  type,
  label,
  name,
  value,
  onChange,
  onBlur,
  error = null
}: Props) => {
  return (
    <TextField
      type={type}
      fullWidth={true}
      margin="normal"
      id={id}
      label={label}
      name={name}
      value={value}
      error={error !== null}
      helperText={error}
      onChange={onChange}
    />
  );
};
