import { i as is_promise, n as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  let { nextQuestion } = $$props;
  let { previousQuestion } = $$props;
  let { addToScore } = $$props;
  let answers = question.incorrect_answers.map((answer) => {
    return { answer, correct: false };
  });
  let allAnswers = [
    ...answers,
    {
      answer: question.correct_answer,
      correct: true
    }
  ];
  shuffle(allAnswers);
  if ($$props.question === void 0 && $$bindings.question && question !== void 0) $$bindings.question(question);
  if ($$props.nextQuestion === void 0 && $$bindings.nextQuestion && nextQuestion !== void 0) $$bindings.nextQuestion(nextQuestion);
  if ($$props.previousQuestion === void 0 && $$bindings.previousQuestion && previousQuestion !== void 0) $$bindings.previousQuestion(previousQuestion);
  if ($$props.addToScore === void 0 && $$bindings.addToScore && addToScore !== void 0) $$bindings.addToScore(addToScore);
  return `<h3><!-- HTML_TAG_START -->${question.question}<!-- HTML_TAG_END --></h3> ${``} <div class="answerButtons">${each(allAnswers, (answer) => {
    return `<button class="button-answer"><!-- HTML_TAG_START -->${answer.answer}<!-- HTML_TAG_END --></button>`;
  })}</div> ${``}`;
});
const css = {
  code: ".modalBG.svelte-1nr2lv8{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, .8);display:flex;flex-direction:column;align-items:center}.modal.svelte-1nr2lv8{background-color:#FFF;padding:20px;border-radius:15px;display:flex;flex-direction:column;align-items:center;justify-content:center;width:30vw;margin-top:25vh}",
  map: '{"version":3,"file":"modal.svelte","sources":["modal.svelte"],"sourcesContent":["<script>\\r\\n  import { fade } from \\"svelte/transition\\";\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n.modalBG {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: rgba(0, 0, 0, .8);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n.modal {\\r\\n  background-color: #FFF;\\r\\n  padding: 20px;\\r\\n  border-radius: 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 30vw;\\r\\n  margin-top: 25vh;\\r\\n}\\r\\n</style>\\r\\n\\r\\n\\r\\n<div class=\\"modalBG\\" transition:fade>\\r\\n<div class=\\"modal\\" transition:fade>\\r\\n<!-- <slot>optional fallback</slot> -->\\r\\n  <slot />\\r\\n</div>\\r\\n</div>\\r\\n"],"names":[],"mappings":"AAMA,uBAAS,CACP,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CACnC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CACA,qBAAO,CACL,gBAAgB,CAAE,IAAI,CACtB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACd"}'
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="modalBG svelte-1nr2lv8"><div class="modal svelte-1nr2lv8"> ${slots.default ? slots.default({}) : ``}</div></div>`;
});
async function getMusic() {
  const res = await fetch("https://opentdb.com/api.php?amount=10&category=12&type=multiple");
  const quiz = await res.json();
  return quiz;
}
//! The Art portion doesn't function currently
async function getArt() {
  const resArt = await fetch("https://opentdb.com/api.php?amount=10&category=25&type=multiple");
  const quizArt = await resArt.json();
  return quizArt;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionNumber;
  let activeQuestion = 0;
  let score = 0;
  let quiz = getMusic();
  getArt();
  let isModalOpen = false;
  function nextQuestion() {
    activeQuestion = activeQuestion + 1;
  }
  function previousQuestion() {
    activeQuestion = activeQuestion - 1;
  }
  function addToScore() {
    score = score + 1;
  }
  {
    if (score > 9) {
      isModalOpen = true;
    }
  }
  questionNumber = activeQuestion + 1;
  return `<h1 data-svelte-h="svelte-1axatoz">Hey Look, theres a quiz on this page!</h1> <h2 data-svelte-h="svelte-1mjstb0">Plan is to be able to pick a category and change the kind of quiz. Its not there yet. Hopefully
	soon.</h2> <quiz><button data-svelte-h="svelte-1yirmoi">Music</button> <button data-svelte-h="svelte-1a3lm3e">Art</button> <h3>My Score: ${escape(score)}</h3> <h4>Question: #${escape(questionNumber)}</h4> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
		Loading...
	`;
    }
    return function(data) {
      return ` ${each(data.results, (question, index) => {
        return `${index === activeQuestion ? `<div class="fade-wrapper">${validate_component(Question, "Question").$$render(
          $$result,
          {
            nextQuestion,
            previousQuestion,
            addToScore,
            question
          },
          {},
          {}
        )} </div>` : ``}`;
      })} `;
    }(__value);
  }(quiz)}</quiz> ${isModalOpen ? `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 data-svelte-h="svelte-5540">You Won!</h2> <p data-svelte-h="svelte-18k5tn8">Congrats!</p> <button class="ui_button" data-svelte-h="svelte-1y0ijtu">Play Again?</button>`;
    }
  })}` : ``}`;
});
export {
  Page as default
};
