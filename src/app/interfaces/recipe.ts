import { Preference } from './preference';

export interface Recipe {
    id: string;
    title: string;
    subtitle: string;
    imageURL: string;
    blurhash: string;
    preferences: Preference[];
    steps: {
        index: number;
        title: string;
        description: string;
        imageURL: string;
    }[];
}
