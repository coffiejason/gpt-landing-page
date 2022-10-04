import React from 'react';
import './header.css';

function Input(props){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var computedClassName = re.test(props.status) ? 'gpt3__header-content__input-valid' : 'gpt3__header-content__input-invalid';

    if(props.status === ''){
        computedClassName = 'gpt3__header-content__input-neutral';
    }

    return (
        <input className={computedClassName} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
    )
}

export default Input