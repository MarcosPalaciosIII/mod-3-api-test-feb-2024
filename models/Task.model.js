const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
	{
		title: { type: String },
		description: { type: String },
		isCompleted: { type: Boolean },
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
);

const Task = model("Task", taskSchema);

module.exports = Task;
