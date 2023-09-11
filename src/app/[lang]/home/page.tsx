import React from 'react';
import { getTranslation } from '../../../../locales/utils/getTranslation';
import styles from './styles.module.scss';
import { FormPlayer } from '@/app/[lang]/home/components/FormPlayer';
interface HomeProps {
  params: any
}
async function Home({ params}: HomeProps) {
  const lang = await getTranslation(params.lang)
  return (
    <FormPlayer lang={lang}/>
  )
}

export default Home;
