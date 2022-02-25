import { Person } from './person';

export class ThesesResource {
  constructor(
    public id: number,
    public mainAuthor: Person,
    public contactEmail: string | null,
    public otherAuthors: Person[] | null,
    public topic: string,
    public content: string,
    public created?: string,
    public updated?: string
  ) {}

  getShortNameMainAuthor(): string {
    const last = (this.mainAuthor.lastName != undefined || this.mainAuthor.lastName != null) ? this.mainAuthor.lastName : '-';
    const first = (this.mainAuthor?.firstName[0] != undefined || this.mainAuthor?.firstName[0] != null) ? this.mainAuthor?.firstName[0] : '-';
    const middle = (this.mainAuthor?.middleName[0] != undefined || this.mainAuthor?.middleName[0] != null) ? this.mainAuthor?.middleName[0] : '-';

    const shortName = last + ' ' + first + '.' + middle + '.';
    return shortName;
  }
}
