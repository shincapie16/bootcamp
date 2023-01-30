
const logger = require('./logger')

// logger.log("holi")

logger.error("mensaje error");
const miFuncion = (val) =>{
    if (typeof val === "number"){
        return val*2;
    }
    throw new Error("Debe ser un numero")
}
try {
    console.log("Todo bien")
    const doble = miFuncion("que")
    console.log(doble)
} catch (error) {
    logger.error(`El error es ${error}`)
}
