'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { HomeContainer, HomePage } from './styles'
import Header from '@/components/Header';
import LastNews from '@/components/LastNews';

export default function Home() {
  return (
    <HomeContainer>
      <HomePage>
        <Header />
        <LastNews />
      </HomePage>
    </HomeContainer>
  )
}
