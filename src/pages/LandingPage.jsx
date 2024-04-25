import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { CookieBanner } from '../components/CookieBanner/CookieBanner'
import styles from './landing.module.scss'

export const LandingPage = () => {
  return (
    <>
    <CookieBanner />
    <NavBar />
    <h3>DETTE ER BUTTIKKENS FORSIDE</h3>
    </>
  )
}
