<script lang="ts">
	import { TaskCollection } from "../api/TaskCollection";

	let newTask = "";

	const handleSubmit = () => {
		TaskCollection.insert({
			text: newTask,
			createdAt: new Date()
		});

		newTask = "";
	};
</script>

<form class="task-form" on:submit|preventDefault={ handleSubmit }>
	<input type="text" name="task" placeholder="Add a task" bind:value={ newTask } />
	<button type="submit">Add task</button>
</form>