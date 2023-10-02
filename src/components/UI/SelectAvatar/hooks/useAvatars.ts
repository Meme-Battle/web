"use client";
import React, { useEffect, useState } from "react";
import { GetAvatars } from "@/services/GetAvatars";
export function useAvatars() {
  const [avatars, setAvatars] = useState<Array<{}>>([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const avatarsData = await GetAvatars();
        setAvatars(avatarsData);
      } catch (err) {
        console.error("Erro ao buscar avatares de usuários:", err);
      }
    };
    fetchAvatars();
  }, []);

  return avatars;
}
