'use client';
import React from 'react';
import { Input } from "../../../../../components/UI/Input";
import { Form } from "../../../../../components/Form";
import { SelectAvatar } from '@/components/UI/SelectAvatar';
import { useAvatars } from '@/components/UI/SelectAvatar/hooks/useAvatars';

interface FormPlayerProps {
  lang: any;
}
export  function FormPlayer({ lang }: FormPlayerProps) {
  const onSubmit = (data: Record<string, any>) => console.log(data);
  const avatars = useAvatars();
  const defaultValues  = {
    nickname: '',
    avatar: '',
  };

  return (
    <Form onSubmit={onSubmit} defaultValues={defaultValues}>
      <SelectAvatar name='avatar' 
      options={avatars} 
      getOptionLabel={(option) => `${option.id} ${option.image}`}
      />
      <Input name="nickname" placeholder={lang.nameInput}  />
    </Form>
  );
}