const { Schema, model } = require("mongoose");

const BucketListItemSchema = new Schema(
    {
    
    description: {
        type:String,
        required:true
    },

    date:{
        type:Date,
    default:Date.now},
    }
    );

    const BucketListItemS =model('bucketListItem', BucketListItemSchema)

    module.exports = BucketListItemS