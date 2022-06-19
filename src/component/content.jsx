import React, { useState } from 'react';
import Data from './dataApi.jsx';

const Content = () => {
    const [keyword, setKeyword] = useState("");
    const [listOfItem, setListOfItem] = useState([]);

    const filter = (event) => {
        setKeyword(event.target.value.trim());
        setInterval(() => {
            window.location.reload();
          }, 300000);
    }

    // const search = () => {
    //     if (listOfItem.length <= 2) {
    //         setListOfItem((oldItem) => {
    //             return [keyword, ...oldItem];
    //         });
    //     }
    // }

    // const deleteItem = (item) => {
    //     setListOfItem((olditem) => {
    //         return olditem.filter((element) => {
    //         return element !== item;
    //         })
    //     })
    // }

    return (
        <div className="Content">
            <div className="upperContent">
                <h3>Add Another keyword <span>1/3</span> <span> UPGRADE</span></h3>

                <div className="filter">
                    {/* <label for="filter">Addvance search</label> */}
                    <input type="text" placeholder="Search your filter here " defaultValue=" " onChange={filter} />
                    <button>SAVE FILTERS</button>
                </div>
                {/* <div>
                    {
                        listOfItem.map((item) => {
                            return (
                                <button className="keywords" onClick={deleteItem()}>{item}</button>
                            )
                        })
                    }
                </div> */}
            </div>
            <div className="lowerContent">

                <div>
                    <h3>The terms you are tracking</h3>
                    <h4>The data will refresh every 5 min</h4>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                            {
                                ['Keywords', 'Goal', 'Matches', 'Search Status', 'Delete Keyword'].map((item, i) => {
                                    return <th>{item}</th>;
                                })
                            }

                        </tr>
                        {
                            Data.filter((list) => {
                                {/* if (listOfItem.length > 0) {
                                    if (listOfItem.length == 1) {
                                        if (list.keyword.toLowerCase().includes(listOfItem[0].toLocaleLowerCase())) {
                                            return list;
                                        }
                                    } else if (listOfItem.length == 2) {
                                        if (list.keyword.toLowerCase().includes(listOfItem[0].toLocaleLowerCase())
                                            || list.goal.toLowerCase().includes(listOfItem[1].toLocaleLowerCase())) {
                                            return list;
                                        }
                                    } else {
                                        if (list.keyword.toLowerCase().includes(listOfItem[0].toLocaleLowerCase())
                                            || list.goal.toLowerCase().includes(listOfItem[1].toLocaleLowerCase()) || list.matches.toLowerCase().includes(listOfItem[1].toLocaleLowerCase())) {
                                            return list;
                                        }
                                    }

                                } else */}
                                if (keyword == "") {
                                    return list;
                                } else if (list.keyword.toLowerCase().includes(keyword.toLocaleLowerCase())) {
                                    return list;
                                }
                            }).map((list, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{list.keyword}    <i className="fas fa-search"></i></td>
                                        <td>{list.goal} </td>
                                        <td>{list.matches}</td>
                                        <td>{list.search_status}</td>
                                        <td><i className="fas fa-trash" ></i></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                <div className="veiwButton">
                    <button>view results</button>
                </div>
            </div>
        </div>)
}

export default Content;