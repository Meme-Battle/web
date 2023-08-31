import React from 'react';
import { getTranslation } from '../../../../locales/utils/getTranslation';
import styles from './styles.module.scss';
import { Input } from '@/components/UI/Input';

interface HomeProps {
  params: any
}
async function Home({ params }: HomeProps) {
  const lang = await getTranslation(params.lang)
  const handleSubmit = () => {
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder={lang.nameInput}
        name={'nickname'}
      />
    </form>
  )
}

export default Home;
