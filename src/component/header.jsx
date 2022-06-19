import React from 'react';

const Header = () => {
    return (
        <div className="header">

<div className="rightHeader">
    <h3>keywords</h3>
    <div className='search'>
        <input type="search" placeholder="Submit " id="search" onChange={ e => console.log(e.target.value)}/>
        <label htmlFor="search">A</label>
    </div>
</div>
        </div>)
}

export default Header;