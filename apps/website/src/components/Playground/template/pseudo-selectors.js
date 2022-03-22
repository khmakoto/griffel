//@ts-check
import { makeStyles } from '@griffel/core';

export default makeStyles({
  focus: {
    ':focus': {
      color: 'red',
    },
  },

  hover: {
    ':hover': {
      color: 'red',
    },
  },

  active: {
    ':active': {
      color: 'red',
    },
  },
});