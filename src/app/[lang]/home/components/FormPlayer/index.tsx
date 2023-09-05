'use client';
import React, { useState, useEffect } from 'react';
import { Input } from "../../../../../components/UI/Input";
import { Form } from "../../../../../components/Form";
import { GetAvatars } from "@/contexts/GetAvatars";
import { Select } from '@/components/UI/Select';

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
  const [avatars, setAvatars] = useState<Array<{ id: number; image: string }>>([]);
  const onSubmit = (data: Record<string, any>) => console.log(data);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const avatarsData = await GetAvatars(id, image);
        setAvatars(avatarsData);
      } catch (err) {
        console.error('Erro ao buscar avatares de usuários:', err);
      }
    };
    fetchAvatars();
  }, []); 

  return (
    <Form onSubmit={onSubmit} defaultValues={defaultValues}>
      <Select name='avatar'>
        <option>Selecione um avatar</option>
        {avatars.map((avatar) => (
          <option key={avatar.id} value={avatar.image}>
            {avatar.id} {avatar.image}
          </option>
        ))}
      </Select>
      <Input name="nickname" placeholder={params.nameInput}  />
    </Form>
  );
}