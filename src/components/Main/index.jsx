import React from 'react'
import { Container } from './style'
import logo from '../../assets/images'

const Main = ()=>{
return(
  <Container>
    <Container.Input placeholder='search'/>
    <Container.Img src={logo}/>
  </Container>
)
}
export default Main
