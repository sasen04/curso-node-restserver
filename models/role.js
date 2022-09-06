const{Schema,model} = require ("mongoose");
//const { schema } = require("./usuario");

const RoleSchema = Schema({
    rol: {
        type: String,
        require: [true, "el rol es obligatorio"]
    }
});


module.exports = model ("Role",RoleSchema);