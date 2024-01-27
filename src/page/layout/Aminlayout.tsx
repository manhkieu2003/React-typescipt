import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

type Props = {}

const Aminlayout = (props: Props) => {
  return (
    <div>
        <header>
          <Header/>
        </header>
        <aside>
            Meunu Aside
        </aside>
        <main>
           <Outlet/>
        </main>
        
    </div>
  )
}

export default Aminlayout