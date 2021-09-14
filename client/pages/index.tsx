import React, { useEffect, useState } from "react";
import ListPersons from "../components/ListPersons";
import { useQuery } from "@apollo/react-hooks";
import TypeAhead from "../components/TypeAhead";
import { PersonsData, Person } from "../models/person";
import { GET_PERSONS } from "../gql/person";

interface PersonCountVars {
  personCount: number;
}

const Index = () => {
  // the hook that calls the query.
  const { loading, error, data } = useQuery<PersonsData, PersonCountVars>(
    GET_PERSONS,
    { variables: { personCount: 2000 } }
  );

  const [foundPersons, setFoundPersons] = useState<Person[]>([]);

  useEffect(() => {
    if (loading === false && data) {
      setFoundPersons(data.persons);
    }
  }, [loading, data]);

  return (
    <>
      {
        <TypeAhead
          data={data?.persons ?? []}
          filter={(d: Person[]) => setFoundPersons(d)}
        />
      }

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {loading === false && !error && foundPersons && (
        <ListPersons persons={foundPersons} paging={20} />
      )}
    </>
  );
};

export default Index;
