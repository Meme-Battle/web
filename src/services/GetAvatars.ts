import { Api } from "@/api/api";

export async function GetAvatars(){
    try{
        const response = await Api('users/avatars', { method: 'GET' });
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const avatars = await response.json();
        return avatars;
    }catch(err){
        console.log('erro na requisição', err);
    }
}