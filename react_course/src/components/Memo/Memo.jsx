import React from 'react'

const MemoComponent = ({ name }) => {
    console.log(`Rendering Memo Component`);
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent); // higher oreder component
