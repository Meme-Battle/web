import React from 'react';
import { getTranslation } from '../../../utils/getTranslation';
import styles from './styles.module.scss';
import { Input } from '@/components/UI/Input';

interface HomeProps {
  params: any
}
async function Home({params}: HomeProps) {
  const lang = await getTranslation(params.lang)
  return  (
        <Input 
        type='text'
        placeholder={lang.nameInput}
        />
    )
}

export default Home;
