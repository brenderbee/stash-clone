export class Teapot {
  constructor(
    public name: string,
    public description: string,
    public colors: Array<string>,
    public infuser: boolean,
    public lid: boolean,
    public capacity: number,
    public image: string,
    public price: string,
    public rating: Array<number>
  ) {}
}
