import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './Text.module.scss';

const Text = ({
                  element,
                  children,
                  className,
                  strong,
                  italic,
                  disable}) => {
    const el = `${element}`
    return React.createElement(el,{
        className: cn(
            s.root,
            className,
            s[`${element}`],
            {[s.disable]:disable},
            {[s.strong]:strong},
            {[s.italic]:italic},
            )
    }, children);
};

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']),
    children: PropTypes.node,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disable: PropTypes.bool,
};

export default Text;