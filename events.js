// Clase EventEmitter.
// Metodos:
//    on
//    emit
class EventEmitter {
	
	constructor() {

		this.eventos = {};
	}

	on(evento, escuchador) {
    if(this.eventos[evento]) {
      this.eventos[evento].push(escuchador);
    } else {
      this.eventos[evento] = [escuchador];
    }
	}

	emit(evento, ...argumentos) {
		for(let e of this.eventos[evento]) {
      e(...argumentos);
    }
	}
}

exports = module.exports = EventEmitter;
