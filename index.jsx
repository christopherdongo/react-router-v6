import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./src/pages/Home"
import About from "./src/pages/About"
import Vans, {loader as vansLoader} from "./src/pages/Vans/Vans"
import VanDetail from "./src/pages/Vans/VanDetail"
import Dashboard from "./src/pages/Host/Dashboard"
import Income from "./src/pages/Host/Income"
import Reviews from "./src/pages/Host/Reviews"
import HostVans from "./src/pages/Host/HostVans"
import HostVanDetail from "./src/pages/Host/HostVanDetail"
import HostVanInfo from "./src/pages/Host/HostVanInfo"
import HostVanPricing from "./src/pages/Host/HostVanPricing"
import HostVanPhotos from "./src/pages/Host/HostVanPhotos"
import Layout from "./src/components/Layout"
import HostLayout from "./src/components/HostLayout"
import {Error} from './src/components/Error'
import {NotFound} from './src/pages/NotFound'

import "./server"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" 
  errorElement={<Error />}
  element={<Vans />} loader={vansLoader} />
  <Route path="vans/:id" element={<VanDetail />} />
  
  <Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans" element={<HostVans />} />
    <Route path="vans/:id" element={<HostVanDetail />}>
      <Route index element={<HostVanInfo />} />
      <Route path="pricing" element={<HostVanPricing />} />
      <Route path="photos" element={<HostVanPhotos />} />
    </Route>
  </Route>
  <Route path='*' element={<NotFound />} />
</Route>
))

function App() {

  return (
    <RouterProvider 
    router={router}
    />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);