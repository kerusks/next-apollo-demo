import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {NextPage} from 'next';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
});

export interface ListPersonsProps {
  persons: Person[];
  paging: number;
}

export interface Address {
  address: string;
}

export interface Person {
  fullname: string;
  email: string;
  phone: string;
  address: Address;
}


interface Persons {
  persons: Person[];
}

const List = styled.ul``
const ListItem = styled.li`
  margin-bottom: .5rem;
`

const ListPersons: NextPage<ListPersonsProps> = ({ persons, paging }) => {
  const classes = useStyles();
  const [pageSet, setPageSet] = useState <Person[]>([])

  useEffect(()=>{
    if (persons) {
      setPageSet(persons.slice(0, paging));
    }
  },[persons])

  const loadMore = () => {
    setPageSet(persons.slice(0,pageSet.length+paging));
  }
  
  return (
<Grid style={{ marginTop: "20px" }} container spacing={2}>
          {pageSet && pageSet.map((person, id: number) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                  >
                    <div>{person.fullname}</div>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    <div>{person.phone}</div>
                    <div>{person.email}</div>
                    <div>{person.address.address}</div>                    
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {pageSet.length !== persons.length  && <Button variant="contained" color="primary"  onClick={loadMore}>{persons.length - pageSet.length} remaining - Load more</Button>}
          
  </Grid>
  )
}

export default ListPersons