module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testEnvironment: 'node',
};
