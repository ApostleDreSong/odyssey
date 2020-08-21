import payment from "./payment";
import rocket from "./rocket";
import user from "./user";
import wallet from "./wallet";
import station from "./station";
import fare from "./trip";
import seed from "./seed";

const routers = {
  payment,
  rocket,
  user,
  wallet,
  station,
  fare,
  seed
};
export { routers as default };
