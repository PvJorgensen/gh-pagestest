import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SiteTwo } from '../pages/SiteTwo'
import { LandingPage } from '../pages/LandingPage'

export const Router = () => {
  return (
    <>
    <HashRouter>
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/forside' element={<LandingPage />} />
            <Route path='/andenside' element={<SiteTwo />} />
        </Routes>
    </HashRouter>
    </>
  )
}
