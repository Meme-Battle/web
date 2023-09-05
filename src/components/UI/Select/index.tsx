"use client";
import React from "react";

interface SelectProps{
    name: string;
    register?: any;
    children: React.ReactNode;
}

export function Select({ register, name, children, ...rest }: SelectProps) {
    return <select {...register(name)} {...rest}>{children}</select>;
  }