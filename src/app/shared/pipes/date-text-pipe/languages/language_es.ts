export let language_es = {
    past: {
        seconds: (time) => { return 'hace unos segundos' },
        minute: (time) => { return 'hace un minuto' },
        minutes: (time) => { return 'hace ' + time + ' minutos' },
        hour: (time) => { return 'hace una hora' },
        hours: (time) => { return 'hace ' + time + ' horas' },
        day: (time) => { return 'hace un día' },
        days: (time) => { return 'hace ' + time + ' dìas' },
        month: (time) => { return 'hace un mes' },
        months: (time) => { return 'hace ' + time + ' meses' },
        year: (time) => { return 'hace un año' },
        years: (time) => { return 'hace ' + time + ' años' },	
    },
    future: {
        seconds: (time) => { return 'en unos cuantos segundos' },
        minute: (time) => { return 'en un minuto' },
        minutes: (time) => { return 'en ' + Math.abs(time) + ' minutos' },
        hour: (time) => { return 'en una hora' },
        hours: (time) => { return 'en ' + Math.abs(time) + ' horas' },
        day: (time) => { return 'en un día' },
        days: (time) => { return 'en ' + Math.abs(time) + ' días' },
        month: (time) => { return 'en un mes' },
        months: (time) => { return 'en ' + Math.abs(time) + ' meses' },
        year: (time) => { return 'en un año' },
        years: (time) => { return 'en ' + Math.abs(time) + ' años' },
    }
};