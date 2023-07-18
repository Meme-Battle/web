import React from "react";
import {getLocales } from '../../../Utils/GetLocales';
interface HomeProps {
  params: any
}
async function Home({params}: HomeProps) {
  const lang = await getLocales(params.lang)

  return <h1>{lang.hello}</h1>;
}

export default Home;
