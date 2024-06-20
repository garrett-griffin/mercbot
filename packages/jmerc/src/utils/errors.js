class TurnInProgressException extends Error {
    constructor(message) {
        super(message);
        this.name = 'TurnInProgressException';
    }
}

class BuySellOrderFailedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'BuySellOrderFailedException';
    }
}

class SetManagerFailedException extends Error {
    constructor(message) {
        super(message);
        this.name = 'SetManagerFailedException';
    }
}

module.exports = {
    TurnInProgressException,
    BuySellOrderFailedException,
    SetManagerFailedException,
};
