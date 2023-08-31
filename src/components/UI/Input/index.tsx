import React from "react";
import { useFormContext } from 'react-hook-form';
import styles from './styles.module.scss';
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

export function Input({name ,...rest}: InputProps){
    const { register } = useFormContext();
    return(
        <input className={styles.input} id={name} {...register(name)} {...rest}/>
    )
}