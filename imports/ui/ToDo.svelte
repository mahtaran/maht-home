<script lang="ts">
	import { TaskCollection } from "../api/TaskCollection";
	import Task from "./Task.svelte";
	import TaskForm from "./TaskForm.svelte";

	// Do nothing with each Svelte element
	// We need to use it some way, otherwise it will be removed from the imports
	Task;
	TaskForm;

	$m: tasks = TaskCollection.find({}, { sort: { createdAt: -1 } }).fetch();
</script>

<div class="container">
	<header>
		<h1>To do list</h1>
	</header>

	<TaskForm />

	<ul>
		{#each tasks as task (task._id)}
			<Task task={task} />
		{/each}
	</ul>
</div>
