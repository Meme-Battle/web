import React from 'react';
import { getTranslation } from '../../../../locales/utils/getTranslation';
import styles from './styles.module.scss';
import { FormPlayer } from '@/app/[lang]/home/components/FormPlayer';
interface HomeProps {
  params: any
  avatarId:number
  avatarImage: string;
}
async function Home({ params, avatarId, avatarImage }: HomeProps) {
  const lang = await getTranslation(params.lang)
  return (
    <FormPlayer params={lang} id={avatarId} image={avatarImage}/>
  )
}

export default Home;
