import React  from 'react';
import {connect} from 'react-redux'
import './directoryMenu.scss';
import {selectDirectoryMenu} from '../../redux/directory/directory.selectors'

import MenuItem from '../menuItem/menuItem'
const DirectoryMenu = ({directory})=>{
    
    return(
        <div className='directory-menu'>
            {directory.map(({id , ...otherState})=>{
                return <MenuItem key={id} {...otherState}></MenuItem>
            })}
        </div>
    )
}

const mapStateToProps = state =>({
    directory : selectDirectoryMenu(state)
})

export default connect(mapStateToProps)(DirectoryMenu);