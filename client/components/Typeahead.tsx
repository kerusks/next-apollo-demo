import React from "react";
import {NextPage} from 'next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Person } from "../models/person";

export interface TypeAheadProps {
  filter: (persons: Person[]) => void;
  data: Person[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const TypeAhead
: NextPage<TypeAheadProps> = ({filter, data }) => {
  const classes = useStyles();

  // Could do with debounce - only if time allows
  const updatedPersonsList = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!data) return;
    const term: string = event.target.value.replace(/\s+/g, " ").trim();
    if (term.length > 2) {
      const filterPersons: Person[] | undefined = data.filter(
        (p: Person) => p.fullname.toLowerCase().includes(term.toLowerCase())
      );
      filter(filterPersons ?? []);
    } else {
      filter(data);
    }
  };
  
  return(
    
    <TextField
          onChange={updatedPersonsList}
          placeholder="At least 3 chars"
          id="outlined-basic"
          label="Search by name"
          variant="outlined"
        />
    
  )
}

export default TypeAhead
;