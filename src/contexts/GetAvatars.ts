import { api } from "@/api/api";

export async function GetAvatars(id: number, image: string){
    try{
        const response = await api.get('/users/avatars')
        const avatars = response.data;
        return avatars
    }catch(err){
        console.log('erro na requisição', err)
    }
}