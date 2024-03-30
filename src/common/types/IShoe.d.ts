export interface IShoeSection {
  id: number;
  sectionName: string;
  shoeTypes: IShoeType[];
}

export interface IShoeType {
  id: number;
  typeName: string;
}

export type ObjCurrentSection = {
  shoeSectionId: number,
  shoeTypeId: number,
  currentSection: string[]
}

export interface Shoe {
  id: number;
  shoeName: string;
  shoeDescription: string;
  shoePrice: number;
  shoeImage: string;
}

/* 
public int Id { get; set; }

[Required]
[StringLength(20)]
public string? ShoeName { get; set; }

[Required]
[StringLength(50)]
public string? ShoeDescription { get; set; }

[Required]
[StringLength(8)]
public int? ShoePrice { get; set; }

[Required]
[StringLength(500)]
public string? ShoeImage { get; set; }
*/