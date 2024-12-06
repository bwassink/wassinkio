import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component } from "../../chunks/ssr.js";
import { y } from "../../chunks/index3.js";
import "../../chunks/image.js";
/* empty css                                                 */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_q;
  let { data } = $$props;
  const q = y(data);
  $$unsubscribe_q = subscribe(q, (value) => value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_q();
  return ` <main data-svelte-h="svelte-1ce8kda"><h1>Welcome to my work in progress!</h1> <p>This is a site where I mess around and try to gain more of an understanding of development.</p> <p>Thanks for visiting! Go try your hand at some <a href="/quiz">Trivia</a>!</p></main>`;
});
export {
  Page as default
};
