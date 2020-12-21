const mongoose = require('mongoose');
const {getMate,preSave} = require('./helpers');
 
const InventoryLogSchema = new mongoose.Schema({
    type: String,
    num: String,
    user: String,
    
    meta:getMate(),
});

InventoryLogSchema.pre('save',preSave);

mongoose.model('InventoryLog',InventoryLogSchema);