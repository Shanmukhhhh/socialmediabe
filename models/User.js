const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    username:{
        type:	String, 
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        min:20,
        unique:true

    },
    password:{
        type : String ,
        required:true,
         min:6    },

        profillePicture:{
            type:String,
            default:""
        },

        coverPicture:{
            type:String,
            default:""

        },
        followers:{
            type:Array,
            default:""
        },
        followings:{
            type:Array,
            default:""

        },
        about:{
            type:String,
            max:50
        },
        city:{
            type:String,
            max:30
        },
        country:{
            type:String, 
            uppercase:true,
            max:30
        },

        relationShip:{
            type:Number,
            enum:[1,2,3]
        },

      
        








},

{timestamps:true})


module.exports = mongoose.model("User",Userschema)

