'use client';

import { Header, Hero, Profile, History, Skills, Footer } from '@/components';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Header />
      <Hero />
      <Profile />
      <History />
      <Skills />
      <Footer />
    </>
  );
}