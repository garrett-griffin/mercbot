// const { convertFloatsToStrings } = require('../src/utils/conversion');
//
// describe('convertFloatsToStrings', () => {
//     it('should convert floats to strings in a simple object', () => {
//         const input = { a: 1.23, b: 2, c: 'string' };
//         const expectedOutput = { a: '1.23', b: 2, c: 'string' };
//         expect(convertFloatsToStrings(input)).toEqual(expectedOutput);
//     });
//
//     it('should convert floats to strings in a nested object', () => {
//         const input = {
//             a: 1.23,
//             b: {
//                 c: 2.34,
//                 d: 'string',
//                 e: {
//                     f: 3.45,
//                 },
//             },
//         };
//         const expectedOutput = {
//             a: '1.23',
//             b: {
//                 c: '2.34',
//                 d: 'string',
//                 e: {
//                     f: '3.45',
//                 },
//             },
//         };
//         expect(convertFloatsToStrings(input)).toEqual(expectedOutput);
//     });
//
//     it('should handle non-object inputs gracefully', () => {
//         expect(convertFloatsToStrings(null)).toBeNull();
//         expect(convertFloatsToStrings(undefined)).toBeUndefined();
//         expect(convertFloatsToStrings(123)).toBe(123);
//         expect(convertFloatsToStrings('string')).toBe('string');
//     });
//
//     it('should handle arrays gracefully', () => {
//         const input = [1.23, 2, 'string'];
//         const expectedOutput = ['1.23', 2, 'string'];
//         expect(convertFloatsToStrings(input)).toEqual(expectedOutput);
//     });
// });
