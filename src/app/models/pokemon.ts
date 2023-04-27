export interface Pokemon {
    id: number,
    name: string;
    age: number;
    color: string;
    type: PokemonType;
    isStrong: boolean;
}

export interface PokemonType {
    key?: number;
    value: string;
}