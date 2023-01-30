import * as controlador from "./controller.js";
import chalk from 'chalk';

const suma = controlador.suma(3,2);
const multi = controlador.mutiplicar(3,2);
console.log(chalk.green(suma));
console.log(chalk.green(multi));