import payment from "./payment";
import rocket from "./rocket";
import user from "./user";
import wallet from "./wallet";
import station from "./station";
import fare from "./trip";

const routers = {
  payment,
  rocket,
  user,
  wallet,
  station,
  fare
};
export { routers as default };
