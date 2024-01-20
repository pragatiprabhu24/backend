import React from "react";

export const InputField = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="mt-2 content-center">
        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
          {label}
        </label>
        <input
          className=" w-full text-base px-4 py-1 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};
