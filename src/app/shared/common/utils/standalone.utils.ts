import { Serializable } from 'typedjson';

export const nameofFactory = <T>(type: Serializable<T>) => (name: keyof T) => name as string;