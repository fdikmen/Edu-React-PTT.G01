import {Container} from 'semantic-ui-react'
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import React from 'react'
import RootRouter from '../config/RootRouter';
function HomePage() {
  return (
    <>
      <HeaderSection />
      <Container text style={{ minHeight: 300, }}>
        <RootRouter />
      </Container>
      <FooterSection />
    </>
  )
}

export default HomePage