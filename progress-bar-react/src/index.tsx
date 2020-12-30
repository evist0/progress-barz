import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Block from "./components/block";
import ProgressBar from "./components/progressBar";

const App = () => {
    const [maximum, setMaximum] = useState(0)
    const [current, setCurrent] = useState(0)

    const handleScroll = () => {
        setCurrent(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setMaximum(document.body.scrollHeight - document.documentElement.clientHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <React.Fragment>
            <ProgressBar color="white" value={current} maxValue={maximum}/>
            <Block color="red"/>
            <Block color="blue"/>
            <Block color="green"/>
        </React.Fragment>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
