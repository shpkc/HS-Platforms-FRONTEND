import React from "react";
import { TextAreaContainer } from "./commonStyle";
import { TextFieldProps } from "./commonType";

const TextArea = ({
  placeholder = undefined,
  maxLength = undefined,
  disabled = false,
  value,
  row = 1,
  autoRow = false,
  onChange,
  fullWidth,
  padding,
  margin,
  autoFocus,
  ...rest
}: TextFieldProps) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const [currentValue, setCurrentValue] = React.useState(value);

  const onChangeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(e.target.value);
    onChange && onChange(e);
  };
  React.useEffect(() => {
    ref.current &&
      autoRow &&
      (() => {
        ref.current.style.height = "0px";
        ref.current.style.height = `${ref.current.scrollHeight}px`;
      })();

    ref.current && !autoRow && (ref.current.style.height = "auto");
  }, [currentValue]);

  return (
    <TextAreaContainer
      ref={ref}
      rows={row}
      onChange={onChangeEvent}
      readOnly={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      fullWidth={fullWidth}
      padding={padding}
      margin={margin}
      autoFocus={autoFocus}
      {...rest}
    />
  );
};

export default TextArea;
