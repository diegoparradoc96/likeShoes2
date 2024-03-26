export interface IShoeSection {
  id?: number;
  sectionName: string;
  shoeTypes: IShoeType[];
}

export interface IShoeType {
  id: number;
  typeName: string;
}
