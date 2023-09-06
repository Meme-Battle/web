"use client";
import React, { useEffect, useState } from "react";
import { GetAvatars } from "@/contexts/GetAvatars";

interface SelectProps{
    name: string;
    register?: any;
    id: number;
    image: string;
}

export function SelectAvatar({ register, name, id, image, ...rest }: SelectProps) {
    const [avatars, setAvatars] = useState<Array<{ id: number; image: string }>>([]);

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
    
    return <select {...register(name)} {...rest}>
        <option>Selecione um avatar</option>
        {avatars.map((avatar) => (
          <option key={avatar.id} value={avatar.image}>
            {avatar.id} {avatar.image}
          </option>
        ))}
    </select>;
  }