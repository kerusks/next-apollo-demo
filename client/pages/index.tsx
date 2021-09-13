import React, {useEffect, useState} from "react"
import ListPersons from "../components/ListPersons"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import Typeahead from "../components/Typeahead"
export interface Address {
  address: string;
}

export interface Person {
  fullname: string;
  email: string;
  phone: string;
  address: Address;
}

export interface PersonsData {
  persons: Person[];
}


interface PersonCountVars {
  personCount: number;
}

const Index = () => {
  const GET_PERSONS = gql`
  query Query($personCount: Int!) {
    persons(personCount: $personCount) {
      fullname
      email
      phone
      address {
        address
      }
    }
  }
`

  // the hook that calls the query.
  const {loading, error, data}  = useQuery<PersonsData, PersonCountVars>(GET_PERSONS, {variables: {personCount: 81}})

  const updatedPersonsList = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term:string = event.target.value.replace(/\s+/g, ' ').trim()
    if (term.length > 2) {
      console.log ('personsData', data);

        const filterPersons:Person[]  = data?.persons.filter((p:Person) => p.fullname.toLowerCase().includes(term.toLowerCase()));
        setFoundPersons(filterPersons)
        console.log('is Array', filterPersons);
    }else{
        setFoundPersons(data!.persons)
    }
  }
 
  const [foundPersons, setFoundPersons] = useState <Person[]>([]);
 
  useEffect(()=>{
    if (loading===false && data) {
      setFoundPersons(data.persons)
    }
  },[loading, data])

  if (loading) return `<p>Loading...</p>`;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {<Typeahead filter={updatedPersonsList}/>}
      <div>{loading}</div>
      <div>{error}</div>
      {foundPersons && <ListPersons persons={foundPersons} paging={20} />}
    </div>
  )
}

export default Index
