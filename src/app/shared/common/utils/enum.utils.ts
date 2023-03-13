export namespace EnumUtils {

    export function assertDefaultCaseUnreachable(value: never) {
        console.error(value);
        throw new Error();
    }

    export function getAll<T>(
        enumObject: { [key: string]: T },
        enumTypeOf: 'string' | 'number' = 'string'
    ): Array<string | number> {
        return Object.keys(enumObject)
            .filter(k => typeof enumObject[k as any] === enumTypeOf)
            .map(key => {
                if (typeof enumObject[key] === enumTypeOf) {
                    return enumObject[key] as unknown as string;
                } else {
                    return enumObject[key] as unknown as number;
                }
            });
    }

    export function getAllKeys<T>(
        enumObject: { [key: string]: T },
        enumTypeOf: 'string' | 'number' = 'string'
    ): Array<string> {
        return Object.keys(enumObject)
            .filter(k => typeof enumObject[k as any] === enumTypeOf);
    }

    export function checkIfExistInEnum<T>(
        value: any,
        enumObject: { [key: string]: T },
        enumTypeOf: 'string' | 'number' = 'string'
    ): boolean {
        return getAll(enumObject, enumTypeOf)?.includes(value);
    }
}
