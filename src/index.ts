import { app } from "./app";
import {TurmaController} from "./endpoint/TurmaController"

console.log("Hello World!");

const turmaController = new TurmaController()
app.post("/turma",turmaController.createTurma)

app.get("/turma",turmaController.getTurma)





/* const shaw = new Turma("1", "Shaw", 0);

console.log("id", shaw.getId());

console.log("Nome", shaw.getNome());

console.log("Modulo", shaw.getModulo());

//--------------------------------------//

const silveira = new Turma("2", "Shaw", 0);

console.log("id", silveira.getId());

console.log("Nome da Turma", silveira.getNome());

console.log("Modulo", silveira.getModulo());

//--------------------------------------//
 */







