import React from 'react';
import Content from './content';
import Header from './header';
import Menubar from './menubar';

const Intern = () => {
    return (
        <>
            <div className="dflex">
                <Menubar />
                <div style={{
                    width: '100%'
                }}>
                    <Header />
                    <Content />
                </div>
            </div>
        </>
    )
}

export default Intern;