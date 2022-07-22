import { UseDateSelectOptions } from "./use-date-select";

interface ReactHookFormCompatibleProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
}

export interface PresetComponentProps
  extends ReactHookFormCompatibleProps,
    UseDateSelectOptions {}

export interface Option {
  value: string;
  label: string;
}
export type Options = Option[];
