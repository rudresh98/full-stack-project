const { Schema, default: mongoose } = require("mongoose");
const dataSchema = mongoose.model(
  "items",
  new Schema({
    id: { type: Number, unique: true },
    title: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
    },
    status: {
      type: Schema.Types.String,
      default: "not completed",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    priority: {
      type: Schema.Types.String,
      default: "minor",
    },
    lastUpdated: {
      type: Schema.Types.Date,
      enum: Date.now,
      default: Date.now,
    },
    active: {
      type: Schema.Types.Boolean,
      default: false,
    },
  })
);

module.exports = { dataSchema };
