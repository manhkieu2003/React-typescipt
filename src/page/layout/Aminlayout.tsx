import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Aminlayout = (props: Props) => {
  return (
    <div>
        <header>
           Header amin layout
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