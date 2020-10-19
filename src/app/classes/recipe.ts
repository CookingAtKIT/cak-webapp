export class Recipe {
    id: string;
    public: boolean;
    flags: number;
    title: string;
    author: string;
    lastEdit: Date;
    thumbnail: string;
    ingredients: {
        ingredient: {
            displayname:string,
            allgergene: string[],
            unit: string,
            kcal?: number,
            reweLink?: string
        },
        amount: number
    }[];
    steps: {
        index: number,
        title: string,
        body: string,
        img?: string
    }[];
    likes: number;
    portions: number;
    comments: {
        author: string,
        body: string,
        likes: number,
        images: string[]
    };
}

export class RecipeEdit {
    edits?: {any}[];
    error?: string;
    description?: string;
}

export class RecipeCreate {
    id?: string;
    error?: string;
    description?: string;
}
