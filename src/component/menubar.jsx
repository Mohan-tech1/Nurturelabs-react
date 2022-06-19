import React ,{ useState} from 'react';
const list = [
    {
        icon: 'fas fa-home',
        menuItem: "Add keywords",
    },
    {
        icon: 'fas fa-user-friends',
        menuItem: "Matches",
    }, {
        icon: 'fas fa-file-alt',
        menuItem: "Manage source",
    }, {
        icon: 'fas fa-file-alt',
        menuItem: "Integration",
    }, {
        icon: 'far fa-bell',
        menuItem: "Alerts",
    }, {
        icon: 'far fa-star',
        menuItem: "Setting",
        angle: "fas fa-angle-down"
    },
    {
        icon: '',
        menuItem: "Billings",
    },
]
const Menubar = () => {
    const [show, setShow] = useState(false);


    return (
        <>
            <div className="bars" onClick={() => setShow(!show)}><i className="fas fa-bars"></i></div>
            <div className={` menuBar ${show ? "" :"show"}`}>

                <div className="leftHeader">TermMoniter</div>

                <div className="menuList ">
                    <ul>
                        {
                            list.map((curItem) => {
                                return (
                                    <li>

                                        <a href="#">
                                            <i class={curItem.icon}></i>
                                            {
                                                curItem.menuItem}<i class={curItem.angle}></i> </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Menubar;