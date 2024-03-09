const express = require("express");
const router = express.Router();
const Task = require("../models/Task.model");

// Read
router.get("/", (req, res) => {
	Task.find()
		.then((tasksFromDb) => {
			res.json({ success: true, data: tasksFromDb });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// Read
router.get("/:taskId", (req, res) => {
	Task.findById(req.params.taskId)
		.then((taskFromDb) => {
			res.json({ success: true, data: taskFromDb });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// Create
router.post("/", (req, res) => {
	Task.create(req.body.task)
		.then((taskFromDb) => {
			res.json({ success: true, data: taskFromDb });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// Update
router.put("/:taskId", (req, res) => {
	Task.findByIdAndUpdate(req.params.taskId, { ...req.body.task })
		.then((taskFromDb) => {
			res.json({ success: true, data: taskFromDb });
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

// Delete
router.delete("/:taskId", (req, res) => {
	Task.findByIdAndDelete(req.params.taskId)
		.then(() => {
			res.json({
				success: true,
				data: {
					message: `Task ${req.params.taskId} hass been successfully removed!`,
				},
			});
		})
		.catch((err) => {
			res.json({ success: false, error: err });
		});
});

module.exports = router;
