const { Expose, Type, plainToClass } = require('class-transformer');

class Region {
    @Expose() id;
    @Expose() name;
    @Expose() description;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(Region, data);
    }
}

module.exports = { Region };
