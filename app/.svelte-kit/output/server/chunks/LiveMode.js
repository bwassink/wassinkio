import { c as create_ssr_component } from "./ssr.js";
import "./stores.js";
import "./client.js";
const VisualEditing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { zIndex = void 0 } = $$props;
  let { refresh = void 0 } = $$props;
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0) $$bindings.zIndex(zIndex);
  if ($$props.refresh === void 0 && $$bindings.refresh && refresh !== void 0) $$bindings.refresh(refresh);
  return ``;
});
const LiveMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export {
  LiveMode as L,
  VisualEditing as V
};
