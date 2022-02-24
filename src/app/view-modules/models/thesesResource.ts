import { Person } from './person';

export class ThesesResource {
  constructor(
    public id: number,
    public mainAuthor: Person,
    public contactEmail: string | null,
    public otherAuthors: Person[] | null,
    public topic: string,
    public content: string,
    public created: string,
    public updated: string
  ) {}
}
