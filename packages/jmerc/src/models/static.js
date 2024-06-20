const { Expose, Type, plainToClass } = require('class-transformer');

class BuildingType {
    @Expose() id;
    @Expose() name;
    @Expose() description;
    @Expose() category;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(BuildingType, data);
    }
}

class ItemClass {
    @Expose() id;
    @Expose() name;
    @Expose() description;
    @Expose() category;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(ItemClass, data);
    }
}

class RecipeClass {
    @Expose() id;
    @Expose() name;
    @Expose() inputs;
    @Expose() outputs;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(RecipeClass, data);
    }
}

class TransportType {
    @Expose() id;
    @Expose() name;
    @Expose() capacity;
    // Add other properties as needed

    static modelValidate(data) {
        return plainToClass(TransportType, data);
    }
}

module.exports = { BuildingType, ItemClass, RecipeClass, TransportType };
