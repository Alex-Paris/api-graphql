import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql'

import { AddAppointmentInput } from '../dtos/inputs/add-appointment-input'
import { Appointment } from '../dtos/models/appointment-model'
import { Customer } from '../dtos/models/customer-model'

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ]
  }

  @Mutation(() => Appointment)
  async addAppointment(@Arg('data') data: AddAppointmentInput) {
    const appointment: Appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt
    }

    return appointment
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment)

    return {
      name: 'John Doe'
    }
  }
}