import React from 'react';



function Friend(props) {

    function frindClickedWithId(){
        props.friendClick(props.id)
    }


    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
                <button onClick={frindClickedWithId}>
                    Display
                </button>
            </td>

        </tr>
    );
}

export default Friend;