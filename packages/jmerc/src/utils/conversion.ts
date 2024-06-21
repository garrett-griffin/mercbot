/**
 * Converts floats in an object to strings.
 *
 * @param obj - The object to convert.
 * @returns The object with floats converted to strings.
 */
function convertFloatsToStrings(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const convertedObj: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
            convertedObj[key] = convertFloatsToStrings(value);
        } else if (typeof value === 'number' && !Number.isInteger(value)) {
            convertedObj[key] = value.toString();
        } else {
            convertedObj[key] = value;
        }
    }

    return convertedObj;
}

export {
    convertFloatsToStrings,
};
