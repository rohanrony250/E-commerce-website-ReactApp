import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,...otherProps}) =>
(
    <button className='btn btn-outline-success btn-block' {...otherProps}>
        {children}
    </button>
)

export default  CustomButton

