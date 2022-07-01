import { ChangeEvent } from "react";
import "./Input.css";
import { InputProps, TextAreaProps } from "../@types/Input";

export function Input({
  type,
  name,
  value,
  placeholder,
  setValue,
  onUpload,
}: InputProps) {
  const isUploading = type === "file";

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!setValue) {
      return;
    }

    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="input__container">
      <label htmlFor={name}>
        <h2>{name}</h2>
      </label>
      {isUploading ? (
        <input
          className="input-image"
          type={type}
          id={name}
          onChange={onUpload}
        />
      ) : (
        <input
          className="input"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export function Textarea({
  name,
  value,
  placeholder,
  setValue,
}: TextAreaProps) {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="input__container">
      <label htmlFor={name}>
        <h2>{name}</h2>
      </label>
      <textarea
        className="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
