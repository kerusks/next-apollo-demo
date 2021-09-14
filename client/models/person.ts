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

export interface PersonsData {
  persons: Person[];
}
