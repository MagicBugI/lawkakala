import React from 'react';

import './homepage.scss';


import DirectoryMenu from '../../components/directory-menu/directoryMenu';

const Homepage = ()=>{
    return(
        <div className='homepage'>
            <DirectoryMenu></DirectoryMenu>
        </div>
    )
}

export default Homepage;