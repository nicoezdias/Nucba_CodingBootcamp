//Event Driven
//Eventos - Algo sucede
//Listeners - Que hago cuando eso sucede

class EventEmitter {
	constructor() {
		this.events = {};
	}
	on(type, listener) {
		this.events[type] = this.events[type] || [];
		this.events[type].push(listener);
	}
	emit(type, data) {
		if (this.events[type]) {
			this.events[type].forEach((listener) => {
				listener(data);
			});
		}
	}
}

const emmitter = new EventEmitter();

emmitter.on('user:created', (user) => {
	console.log('user:created', user);
	//Lo que sea....
});

console.log(emmitter.events);

emmitter.emit('user:created', { name: 'Nico', job: 'FullStack Developer' });
