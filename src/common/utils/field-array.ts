export class FieldArray<T> {
  ArrayUse: T[];
  constructor(ArrayUse: T[]) {
    this.ArrayUse = ArrayUse;
  }

  remove(index: number): this {
    this.ArrayUse = this.ArrayUse.filter(
      (item: T) => item !== this.ArrayUse[index],
    );
    return this;
  }

  update(index: number, item: T): this {
    this.ArrayUse[index] = item;
    return this;
  }

  get(index: number): T {
    return this.ArrayUse[index];
  }

  append(item: T): this {
    this.ArrayUse.push(item);
    return this;
  }

  get length(): number {
    return this.ArrayUse.length;
  }

  get list(): T[] {
    return this.ArrayUse;
  }
}
