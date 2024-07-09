import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        {children}
        &copy; Next JS is great;
    </div>
  )
}

export default Layout