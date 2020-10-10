import React from 'react';

import style from './InfoUser.module.css'


const InfoUser = (props) =>{

    return(
        <>
            <div className={style.container}>
            
                <div className={[style.container, style.directionRow]}>

                    <div className={[style.directionRow]}>
                        <img src={props.avatar} alt=''/>
                        <h3>{props.name}</h3>
                        <h5>{props.email}</h5>

                    </div>

                </div>
            </div>
        </>
    )
};


export default InfoUser;