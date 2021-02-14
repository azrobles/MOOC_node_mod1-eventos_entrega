const EventEmitter = require('events');

// Importar modulo Later.js:
const later = require('later');

// Usar zona horaria local:
later.date.localTime();

// Clase Programador.
// Permite configurar la temperatura que se desea tener en la habitacion.
// Eventos:
//    ideal
class Programador  extends EventEmitter {

  constructor(configuracion) {
    super();

    for(let programacion of configuracion) {
      // Crear planificacion segun la hora señalada en la programacion
      const sched = later.parse.text('at ' + programacion.hora);

      // Crear un temporizador que emita un evento llamado "ideal" 
      // en los instantes planificados anteriormente:
      later.setInterval(() => this.emit('ideal', programacion.temperatura), sched);
    }
  }
}

exports = module.exports = Programador;
