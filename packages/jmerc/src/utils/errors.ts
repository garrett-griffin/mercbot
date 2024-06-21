class TurnInProgressException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TurnInProgressException';
    }
}

class BuySellOrderFailedException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'BuySellOrderFailedException';
    }
}

class SetManagerFailedException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'SetManagerFailedException';
    }
}

export {
    TurnInProgressException,
    BuySellOrderFailedException,
    SetManagerFailedException,
};