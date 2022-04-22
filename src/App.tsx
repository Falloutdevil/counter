import React, {useState} from 'react';

import './App.css';
import {Button} from './components/button/Button';
import {Scoreboard} from './components/scoreboard/Scoreboard';

function App() {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        if (counter < 5) {
            setCounter(count => count + 1);
        }
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };

    const reset = () =>{
        setCounter(0)
    }

    return (
        <div className="counter">
            <Scoreboard counter={counter}/>
            <div className="btn__container">
                <Button callBack={increase} name={'+'} disabled={counter === 5}/>
                <Button callBack={decrease} name={'-'} disabled={counter === 0}/>
                <Button callBack={reset} name={'reset'} disabled={counter === 0}/>
            </div>
        </div>
    );
}

export default App;
