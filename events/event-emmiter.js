/**
 *
 * O Node.js tem um módulo integrado, chamado "Eventos", onde você pode criar, disparar e ouvir seus próprios eventos.
 *
 * Para incluir o módulo de Eventos integrado, use o require() método. Além disso, todas as propriedades e métodos do evento são uma instância de um objeto EventEmitter. Para poder acessar essas propriedades e métodos, crie um objeto EventEmitter:
 */

var events = require("events");
var eventEmitter = new events.EventEmitter();

/**
 * Você pode atribuir manipuladores de eventos a seus próprios eventos com o objeto EventEmitter.
 *
 * No exemplo abaixo, criamos uma função que será executada quando um evento "grito" for disparado.
 *
 * Para disparar um evento, use o emit()método.
 */

// Create an event handler:ß
var myEventHandler = function () {
  console.log("I hear a scream!");
};

// Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit("scream");
