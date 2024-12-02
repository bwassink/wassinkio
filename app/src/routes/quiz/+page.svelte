<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Question from '../../components/question.svelte';
	import Modal from '../../components/modal.svelte';
	let activeQuestion = 0;
	let score = 0;
	let quiz = getMusic();
	let quizArt = getArt();
	let isModalOpen = false;

	async function getMusic() {
		const res = await fetch('https://opentdb.com/api.php?amount=10&category=12&type=multiple');
		const quiz = await res.json();
		return quiz;
	}
	//! The Art portion doesn't function currently
	async function getArt() {
		const resArt = await fetch('https://opentdb.com/api.php?amount=10&category=25&type=multiple');
		const quizArt = await resArt.json();
		return quizArt;
	}

	function nextQuestion() {
		activeQuestion = activeQuestion + 1;
	}
	function previousQuestion() {
		activeQuestion = activeQuestion - 1;
	}

	function resetMusicQuiz() {
		isModalOpen = false;
		score = 0;
		quiz = getMusic();
		activeQuestion = 0;
	}

	function addToScore() {
		score = score + 1;
	}
	// Reactive Statement
	$: if (score > 9) {
		isModalOpen = true;
	}
	// Reactive Declaration
	$: questionNumber = activeQuestion + 1;
</script>

<h1>Hey Look, theres a quiz on this page!</h1>
<h2>
	Plan is to be able to pick a category and change the kind of quiz. Its not there yet. Hopefully
	soon.
</h2>
<quiz>
	<button on:click={resetMusicQuiz}>Music</button>
	<button on:click={getArt}>Art</button>
	<h3>My Score: {score}</h3>
	<h4>Question: #{questionNumber}</h4>

	{#await quiz}
		Loading...
	{:then data}
		{#each data.results as question, index}
			{#if index === activeQuestion}
				<div class="fade-wrapper" in:fly={{ y: 100 }} out:fly={{ y: -200 }}>
					<Question {nextQuestion} {previousQuestion} {addToScore} {question} />
				</div>
			{/if}
		{/each}
	{/await}
</quiz>

{#if isModalOpen}
	<Modal>
		<h2>You Won!</h2>
		<p>Congrats!</p>
		<button class="ui_button" on:click={resetMusicQuiz}>Play Again?</button>
	</Modal>
{/if}
