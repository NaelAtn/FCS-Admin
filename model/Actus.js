const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const ActusSchema = new Schema ({
    image : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    }
})


module.exports = Actus = model ('actus' ,ActusSchema )