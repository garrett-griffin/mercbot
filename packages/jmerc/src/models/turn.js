const { Expose, plainToInstance } = require('class-transformer');

/**
 * @typedef {Object} Turn
 * @property {number} turn
 * @property {string} [month]
 * @property {number} [year]
 */
class Turn {
    @Expose() turn;
    @Expose() month;
    @Expose() year;

    /**
     * @param {Object} data
     * @returns {Turn}
     */
    static modelValidate(data) {
        try {
            return /** @type {Turn} */ plainToInstance(Turn, data);
        } catch (errors) {
            throw new Error('Validation failed: ' + errors);
        }
    }
}

module.exports = Turn;