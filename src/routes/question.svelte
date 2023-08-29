<script>
export let question;
export let nextQuestion;
export let previousQuestion;
export let addToScore;
let isCorrect;
let isAnswered = false;
let answers = question.incorrect_answers.map(answer => {
return {
  answer,
  correct: false
}
});
let allAnswers = [
  ...answers,
  {
    answer: question.correct_answer,
    correct: true
  }
]

shuffle(allAnswers);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

function checkQuestion(correct) {
  isAnswered = true;
  isCorrect = correct;
  if (correct) {
    addToScore();
  }
}
</script>

<h3>{@html question.question}</h3>  
{#if isAnswered}
<h4>{#if isCorrect}
Correct!
{:else}
Nah...
{/if}
</h4>
{/if}
<div class="answerButtons">
{#each allAnswers as answer}
  <button on:click={() => checkQuestion(answer.correct)}>{@html answer.answer}</button>
{/each}
</div>
{#if isAnswered}
  <div class="nextPrevButtons">
  <button on:click={previousQuestion}>Previous Question</button>
  <button on:click={nextQuestion}>Next Question</button>
  </div>
  {/if}