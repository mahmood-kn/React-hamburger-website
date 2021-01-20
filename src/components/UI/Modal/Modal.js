import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} closed={props.modalCancel} />
      <div
        className={classes.Modal}
        style={{
          opacity: props.show ? '1' : '0',
          transform: props.show ? 'translateY(0)' : 'translateY(-200%)',
        }}>
        {props.children}
      </div>
    </Aux>
  );
};
export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);