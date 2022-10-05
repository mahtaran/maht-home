<script lang="ts">
	import { Route } from "tinro";

	let counter = 0;
	let doubled;

	const addToCounter = () => {
		counter += 1;
	};

	$: doubled = counter * 2;

	console.log(Route);
</script>

<nav>
	<a href="/">Home</a>
	<a href="/admin">Admin</a>
</nav>

<Route path="/">
	<div class="container">
		<h1>Welcome to Meteor!</h1>

		<button on:click={addToCounter}>Click Me</button>
		<p>You've pressed the button {counter} times.</p>
		<p>{doubled} is double that.</p>

		<h2>Learn Meteor!</h2>
		<ul>
			<li><a href="https://svelte-tutorial.meteor.com/" target="_blank">Do the Tutorial</a></li>
			<li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>
			<li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>
			<li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>
		</ul>
	</div>
</Route>
<Route path="/admin">
	<div class="container">
		<h1>Admin</h1>
	</div>
</Route>