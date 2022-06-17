import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Body from './Body'
import SideBar from './SideBar'

export default function Home() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{width: '20%' }}>
                    <SideBar />
                </div>

                <div style={{width:'80%'}}>
                    <Body />
                </div>

            </div>

        </div>
    )
}
