import { ObjectType, Field } from "type-graphql"

@ObjectType()
export class Customer {
  @Field()
  name: String
}