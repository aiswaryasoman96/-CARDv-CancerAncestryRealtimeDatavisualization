import React from 'react';
import NavBar from './components/Navbar';


const Layout  = (props) => {
    return (<div>
    <NavBar NavBarLinks={[{
      title: 'Home',
      url: '/',
    },{
      title: 'About US',
      url: 'aboutus'
    },
    {
      title: 'About Project',
      url: 'aboutproject'
    }
    ]}/>
    {props.children}
    </div>)
}

export const addLayout = (component) => {
    return (
        <Layout>
            {component}
        </Layout>
    )
}

export default Layout;