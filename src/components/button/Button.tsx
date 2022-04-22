import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean

}

export const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled}) => {

    const onclickHandler = () => {
        callBack();
    }

    return (
        <div>
            <button disabled={disabled}  className={ disabled ? s.control_btn__disable : s.control__btn} onClick={onclickHandler}>{name}</button>
        </div>
    );
};

