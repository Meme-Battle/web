'use client';
import React, { useState, useEffect } from 'react';
import { Input } from "../../../../../components/UI/Input";
import { Form } from "../../../../../components/Form";

import { SelectAvatar } from '@/components/UI/SelectAvatar';

interface FormPlayerProps {
  params: any;
  id: number;
  image: string;
}
export function FormPlayer({ params, id, image }: FormPlayerProps) {
  const defaultValues  = {
    nickname: '',
    avatar: '',
  };
  
  const onSubmit = (data: Record<string, any>) => console.log(data);

  return (
    <Form onSubmit={onSubmit} defaultValues={defaultValues}>
      <SelectAvatar name='avatar' id={id} image={image} />
      <Input name="nickname" placeholder={params.nameInput}  />
    </Form>
  );
}