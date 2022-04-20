import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({
        name,
        black=false,
        onClick,
}) => (
      <button onClick={onClick} className={cn(s.button, {[s.colorBlack]: black})}>
          {name}
      </button>
);

Button.propTypes = {
    name: PropTypes.node.isRequired,
    black: PropTypes.bool,
    onClick: PropTypes.func,

};

Button.defaultProps = {
    name: "button",
};

export default Button;
