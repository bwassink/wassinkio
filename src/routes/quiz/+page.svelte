<script>
  import Question from "../question.svelte";
  let activeQuestion = 0;
  let score = 0;
  let quiz = getMusic();
  let quizArt = getArt();



async function getMusic() {
  const res = await fetch('https://opentdb.com/api.php?amount=10&category=12&type=multiple')
  const quiz = await res.json();
  return quiz;
}
//! The Art portion doesn't function currently
async function getArt() {
  const resArt = await fetch('https://opentdb.com/api.php?amount=10&category=25&type=multiple')
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
  score = 0;
  quiz = getMusic();
}

function addToScore() {
  score = score + 1;
}
</script>
<h2>Hey Look, theres a quiz on this page! Plan is to be able to pick a category and change the kind of quiz. Its not there yet. Hopefully soon.</h2>
<quiz>
  <button on:click={resetMusicQuiz}>Music</button>
  <button on:click={getArt}>Art</button>
  <h3>My Score: {score}</h3>
  <h4>Question: #{activeQuestion + 1}</h4>

  {#await quiz}
    Loading...  
  {:then data} 
  
    {#each data.results as question, index}
    {#if index === activeQuestion}
    <Question {nextQuestion} {previousQuestion} {addToScore} {question} />
    {/if}
    {/each}
  
  
  {/await}



</quiz>