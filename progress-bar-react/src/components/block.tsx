import React from "react";

const Block = (props: BlockProps) => {
    const {color} = props;

    return (
        <div style={{width: '100%', height: '100vh', backgroundColor: color}}/>
    )
}

type BlockProps = {
    color: string
}

export default Block;
