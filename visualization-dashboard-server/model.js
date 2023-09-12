const mongoose = require('mongoose');
// Define your data model (Schema) based on your JSON structure
const DataSchema = new mongoose.Schema({
    // Define your schema fields here based on your JSON data
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    // start_year: Number,
    // end_year:Number,
    country: String,
    topic: String,
    region: String,
    city: String
  });
  
  const Data = mongoose.model('Data', DataSchema);

  module.exports=Data;

  
