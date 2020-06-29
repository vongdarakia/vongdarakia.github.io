export const None = <T>(
    value: T | undefined | null
): value is undefined | null => value == null;
