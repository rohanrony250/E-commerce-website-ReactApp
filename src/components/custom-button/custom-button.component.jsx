import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,...otherProps}) =>
(
    <button {...otherProps} className={`${otherProps.styles}`}>
        {children}
    </button>
)

export default  CustomButton

