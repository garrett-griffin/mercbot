const {
    TurnInProgressException,
    BuySellOrderFailedException,
    SetManagerFailedException,
} = require('../src/utils/errors');

describe('Custom Exceptions', () => {
    it('should create a TurnInProgressException', () => {
        const message = 'A turn is in progress';
        const error = new TurnInProgressException(message);
        expect(error).toBeInstanceOf(TurnInProgressException);
        expect(error.message).toBe(message);
        expect(error.name).toBe('TurnInProgressException');
    });

    it('should create a BuySellOrderFailedException', () => {
        const message = 'Buy/sell order failed';
        const error = new BuySellOrderFailedException(message);
        expect(error).toBeInstanceOf(BuySellOrderFailedException);
        expect(error.message).toBe(message);
        expect(error.name).toBe('BuySellOrderFailedException');
    });

    it('should create a SetManagerFailedException', () => {
        const message = 'Setting manager failed';
        const error = new SetManagerFailedException(message);
        expect(error).toBeInstanceOf(SetManagerFailedException);
        expect(error.message).toBe(message);
        expect(error.name).toBe('SetManagerFailedException');
    });
});
