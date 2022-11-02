const mongoose = require("mongoose") ;

const {Schema ,model} = mongoose ;

const ReservationSchema = new Schema ({
    
        name : {
            type : String ,
            required : true 
        } ,
        phone : {
            type : Number ,
            required : true
        },
        service : {
            type : String ,
            required : true
        }
        ,
        time : {
            type : String ,
            required : true 
        }
})

module.exports = Reservation = model ('reservation' ,ReservationSchema )