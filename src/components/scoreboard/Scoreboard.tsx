import React from 'react';
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    counter: number
}

export const Scoreboard: React.FC<ScoreboardPropsType> = ({counter}) => {

    return (
        <div>
            <span className={ counter === 5 ? s.counter__maxValue : s.counter__output}>{counter}</span>
        </div>
    );
};

