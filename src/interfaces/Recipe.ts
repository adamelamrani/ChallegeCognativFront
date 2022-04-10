export interface Recipe {
  _id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  duration: number;
  complexity: string;
  people: number;
  favorite?: number;
  recommended?: number;
  ingredients: Array<string>;
  description: string;
  photo: string;
}

export type RecipiesArray = Recipe[];
