export class BaseGetManyRequest {
  skip: number = 0;
  take: number = 10;

  constructor(skip: number, take: number) {
    this.skip = skip;
    this.take = take;
  }
}
