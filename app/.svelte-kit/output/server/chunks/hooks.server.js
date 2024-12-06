import { w, E } from "./index3.js";
import { a as assertEnvVar, c as client } from "./client.js";
const SANITY_API_READ_TOKEN = "skaoWJU00NQ8vnCHLfxSG3IpDTBFzJ8NKahyZpduxtATcIrHE3Q5kW1tovzpjQMwbYL5wBAL7wmdfHeoSNfmLtB3edVbHLAPLt7kgj3AmFttisZSN2TeZuUgSihwzpGttLtNfQhIFJTjgxIRwJfoBQ0cCdJ7i88KzaA0uMujHJxzcZ27eb4W";
const token = assertEnvVar(SANITY_API_READ_TOKEN, "SANITY_API_READ_TOKEN");
const serverClient = client.withConfig({
  token,
  useCdn: false,
  stega: true
});
w(serverClient);
const handle = E();
export {
  handle
};
