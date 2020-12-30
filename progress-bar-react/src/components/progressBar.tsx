const ProgressBar = (props: ProgressBarProps) => {
    const {color, value, maxValue} = props;

    return (
        <div style={{width: '100%', height: '5px', position: 'fixed'}}>
            <div style={{
                width: Math.trunc((value / maxValue) * 100) + "%",
                height: '100%',
                backgroundColor: color,
                transition: 'width 200ms ease-in-out'
            }}/>
        </div>
    )
}

type ProgressBarProps = {
    color: string,
    value: number,
    maxValue: number,
}

export default ProgressBar;
