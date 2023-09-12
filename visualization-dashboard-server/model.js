const mongoose = require('mongoose');
// Define your data model (Schema) based on your JSON structure
const DataSchema = new mongoose.Schema({
    // Define your schema fields here based on your JSON data
    // intensity: Number,
    // likelihood: Number,
    // relevance: Number,
    // year: Number,
    // country: String,
    // topics: [String],
    // region: String,
    city: String
  });
  
  const Data = mongoose.model('Data', DataSchema);

  module.exports=Data;

  
