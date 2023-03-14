import { Constructor, TypedJSON } from 'typedjson';

export namespace TypedJsonUtils {

    export function copyObject<T>(objectToCopy: T, rootType: Constructor<T>): T {
        const copiedObject = TypedJSON.parse(
            TypedJSON.stringify(objectToCopy, rootType),
            rootType
        );

        if (copiedObject == null) {
            throw new Error('Unable to serialize object');
        }

        return copiedObject;
    }

    export function copyArray<T>(objectsToCopy: T[], rootType: Constructor<T>): T[] {
        const copiedArray = TypedJSON.parseAsArray(
            TypedJSON.stringifyAsArray(objectsToCopy, rootType),
            rootType
        );

        if (copiedArray == null) {
            throw new Error('Unable to serialize array');
        }

        return copiedArray; 
    }
}
