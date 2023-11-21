import Image from 'next/image'
import Header from './components/Header/header';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';

export default function Home() {
  return (
    <main>
       <Header />
       <ItemListContainer greeting="Bem-vindo ao nosso catálogo"/>
       
    </main>
  )
}
