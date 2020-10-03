import React from 'react'

import NavWrapper from './NavWrapper'
import Link from './Link'

const NavLinks = ({ menu, customComponents }) => {
    const newMenu = menu ? [...menu] : undefined
    return (
        <>
            { newMenu ?
                <NavWrapper height='100%'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {newMenu.map((menuItem) =>
                            !customComponents ?
                                <Link
                                    href={menuItem.link}
                                    key={menuItem.text}
                                    style={{ padding: '0 0 0 4em' }}>
                                    {menuItem.text}
                                </Link>
                                :
                                <div style={{ padding: '0 0 0 4em' }}>
                                    {menuItem}
                                </div>
                        )}
                    </div>
                </NavWrapper>
                : null}
        </>
    )
}

export default NavLinks