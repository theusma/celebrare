import Image from 'next/image'
import Header from './components/Header/header';
import { ItemListContainer } from './components/ItemListContainer/itemListContainer';
import Banner from './components/Banner/Banner';
export default function Home() {
  return (
    <main>
       <Header />
      
       <Banner
       
        altText="Descrição da imagem do banner"
      />
       <ItemListContainer />
    </main>
  )
}
