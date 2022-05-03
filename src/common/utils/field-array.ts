export class FieldArray<T> {
  readonly ArrayUse: T[];
  constructor(ArrayUse: T[]) {
    this.ArrayUse = ArrayUse;
  }

  remove(index: number): T[] {
    return this.ArrayUse.filter((item: T) => item !== this.ArrayUse[index]);
  }

  get(index: number): T {
    return this.ArrayUse[index];
  }

  append(item: T): T[] {
    this.ArrayUse.push(item);
    return this.ArrayUse;
  }
}
