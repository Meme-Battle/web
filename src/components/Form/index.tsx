'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormProps {
    defaultValues: any;
    children: React.ReactNode;
    onSubmit: SubmitHandler<any>;
}

export function Form({  defaultValues, children, onSubmit }: FormProps) {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.props.name) {
                    return React.cloneElement(child, {
                        ...{
                            ...(child.props as Record<string, any>),
                            register: methods.register,
                            key: child.props.name
                        }
                    });
                } else {
                    return child;
                }
            })}
        </form>
    )
}
