import React , {useState} from 'react';

import './directoryMenu.scss';

import MenuItem from '../menuItem/menuItem'
const DirectoryMenu = ()=>{
    const [getData , setData] = useState(
        [
            {
                title:'Sneakers',
                id:1,
                url:'https://i.ibb.co/tszDwvv/sneakers.jpg'
            },
            {
                title:'Hats',
                id:2,
                url:'https://i.ibb.co/FWWvBtb/forest-1834831-640.jpg',
                linkUrl:'hats'
            },
            {
                title:'T-shirt',
                id:3,
                url:'https://i.ibb.co/vLSBKDr/shirt.jpg'
            },
            {
                title:'Mens',
                id:4,
                style:'large',
                url:'https://i.ibb.co/rGpJvJj/man.jpg'
            },
            {
                title:'Womens',
                id:5,
                style:'large',
                url:'https://i.ibb.co/yWtDB2Q/woman.jpg'
            },
        ]
    )//end state
    
    return(
        <div className='directory-menu'>
            {getData.map(({id , ...otherState})=>{
                return <MenuItem key={id} {...otherState}></MenuItem>
            })}
        </div>
    )
}

export default DirectoryMenu;