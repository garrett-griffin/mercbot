const { Expose, Type, plainToClass } = require('class-transformer');

class Transport {
    @Expose() id;
    @Expose() name;
    @Expose() type;
    @Expose() capacity;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(Transport, data);
    }
}

class TransportRoute {
    @Expose() id;
    @Expose() name;
    @Expose() stops;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(TransportRoute, data);
    }
}

module.exports = { Transport, TransportRoute };
