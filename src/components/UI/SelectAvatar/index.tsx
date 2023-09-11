import React from "react";

interface SelectProps{
    name: string;
    register?: any;
    options: any;
    getOptionLabel: any;
}
export const SelectAvatar = ({ register, name, options, getOptionLabel, ...rest }: SelectProps) =>  {
    return <select {...register(name)} {...rest}>
        <option>Selecione um avatar</option>
        {options.map((option) => (
          <option key={option.id} value={option.image}>
            {getOptionLabel(option)}
          </option>
        ))}
    </select>;
  }