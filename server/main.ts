import { Meteor } from "meteor/meteor";
import { TaskCollection } from "/imports/api/TaskCollection";

const insertTask = taskText => TaskCollection.insert({ text: taskText });

Meteor.startup(() => {
	// code to run on server at startup
	if (TaskCollection.find().count() === 0) {
		[
			"First task",
			"Second task",
			"Third task",
			"Fourth task",
			"Fifth task"
		].forEach(insertTask);
	}
});
