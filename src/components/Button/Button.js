import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';


const Button = ({
        name,
        black=false,
        onClick,
        loginButton,
        registerButton,
}) => (
      <button onClick={onClick} className={cn(
                                              s.button,
                                              {[s.loginButton]: loginButton},
                                              {[s.registerButton]: registerButton},
                                              {[s.colorBlack]: black},
                                              )}>
          <span>
              {name}
          </span>
      </button>
);

Button.propTypes = {
    name: PropTypes.node.isRequired,
    black: PropTypes.bool,
    onClick: PropTypes.func,
    loginButton: PropTypes.bool,
    registerButton: PropTypes.bool,
};

Button.defaultProps = {
    name: "button",
};

export default Button;
