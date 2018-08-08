export let language_de = {
    past: {
        seconds: (time) => { return 'vor einige Sekonden' },
        minute: (time) => { return 'vor eine Minute' },
        minutes: (time) => { return 'vor ' + time + ' Minuten' },
        hour: (time) => { return 'vor eine Stunde' },
        hours: (time) => { return 'vor ' + time + ' Stunden' },
        day: (time) => { return 'vor ein Tag' },
        days: (time) => { return 'vor ' + time + ' Tage' },
        month: (time) => { return 'vor ein Monat' },
        months: (time) => { return 'vor ' + time + ' Monate' },
        year: (time) => { return 'vor ein Jahr' },
        years: (time) => { return 'vor ' + time + ' Jahre' },	
    },
    future: {
        seconds: (time) => { return 'in einige Sekonden' },
        minute: (time) => { return 'in ein Minute' },
        minutes: (time) => { return 'in ' + Math.abs(time) + ' minutos' },
        hour: (time) => { return 'in eine Stunde' },
        hours: (time) => { return 'in ' + Math.abs(time) + ' Stunden' },
        day: (time) => { return 'in ein Tag' },
        days: (time) => { return 'in ' + Math.abs(time) + ' Tage' },
        month: (time) => { return 'in ein Monat' },
        months: (time) => { return 'in ' + Math.abs(time) + ' Monate' },
        year: (time) => { return 'in ein Jahr' },
        years: (time) => { return 'in ' + Math.abs(time) + ' Jahre' },
    }
};