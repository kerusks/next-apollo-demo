import { printIntrospectionSchema } from "graphql";
import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {NextPage} from 'next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


interface TypeaheadProps {
  filter: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const Typeahead: NextPage<TypeaheadProps> = ({filter }) => {
  const classes = useStyles();
  return(
    <form className={classes.root} noValidate autoComplete="off">
    <TextField
          onChange={filter}
          placeholder="At least 3 chars"
          id="outlined-basic"
          label="Search persons by name"
          variant="outlined"
        />
    </form>
  )
}

export default Typeahead;