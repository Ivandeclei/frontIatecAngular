interface EventResponse {
    id: string,
    participants: Array<Participant>,
    name: string,
    description: string,
    eventPlace: string,
    typeEvent: number,
    status: number,
    dateEvent: string,
}