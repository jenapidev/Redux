import React from 'react';

//Error component
const Fatal = (props) => (
    <div className="center fatal">
        {props.message}
    </div>
);

export default Fatal;