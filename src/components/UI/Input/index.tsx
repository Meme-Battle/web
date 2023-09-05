"use client";
import React from "react";
import styles from './styles.module.scss';
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    register?: any;
}

export function Input({ register, name, ...rest }: InputProps) {
    return <input {...register(name)} {...rest} />;
  }