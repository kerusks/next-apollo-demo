import  casual from 'casual';
import { IResolvers } from 'graphql-tools'
import { QueryPersonsArgs, Person} from '../generated'



export const PersonResolvers: IResolvers = {

  
  Query: {
    async persons (_: void, args: QueryPersonsArgs): Promise <Person[]> {      
      const t:Person[] = new Array(args.personCount).fill(null).map(():Person => { return {
        fullname: casual.full_name,
        phone: casual.phone,
        email:casual.email,
        address:{
          street: casual.street,
          address: casual.address,
          address1: casual.address1,
          address2: casual.address2,          
          state: casual.state,
          city: casual.city,          
          country: casual.country

        }
      }});

      return t;
       
    }
  },
}
