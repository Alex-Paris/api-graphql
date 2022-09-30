import { InputType, Field } from 'type-graphql'

@InputType()
export class AddAppointmentInput {
  @Field()
  customerId: string

  @Field()
  startsAt: Date

  @Field()
  endsAt: Date
}