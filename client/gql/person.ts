import { gql } from "apollo-boost";

export const GET_PERSONS = gql`
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
`;