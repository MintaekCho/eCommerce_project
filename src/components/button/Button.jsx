import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss'

export default function Button({
    type = 'button',
    secondary = false,
    bgColor,
    fgColor,
    width,
    children,
    ...restProps
}) {
    const composeClasses = classNames(
        styles.button,
        secondary ? styles.secondary : styles.primary
    )
    const style = {
        backgroundColor: bgColor || '',
        color: fgColor || '',
        width: width || '',
    }
    return (
        <button className={composeClasses} type={type} style={style} {...restProps}>{children}</button>
    );
}

