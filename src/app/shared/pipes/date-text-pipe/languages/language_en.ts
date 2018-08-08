export let language_en = {
    past: {
        seconds: (time) => { return 'a few seconds ago' },
        minute: (time) => { return 'a minute ago' },
        minutes: (time) => { return 'minutes ago' },
        hour: (time) => { return 'an hour ago' },
        hours: (time) => { return time + ' hours ago' },
        day: (time) => { return 'a day ago' },
        days: (time) => { return time + ' days ago' },
        month: (time) => { return 'a month ago' },
        months: (time) => { return time + ' months ago' },
        year: (time) => { return 'a year ago' },
        years: (time) => { return time + ' years ago' },	
    },
    future: {
        seconds: (time) => { return 'in a few seconds' },
        minute: (time) => { return 'in a minute' },
        minutes: (time) => { return 'in ' + Math.abs(time) + ' minutes' },
        hour: (time) => { return 'in an hour' },
        hours: (time) => { return 'in ' + Math.abs(time) + ' hours' },
        day: (time) => { return 'in a day' },
        days: (time) => { return 'in ' + Math.abs(time) + ' days' },
        month: (time) => { return 'in a month' },
        months: (time) => { return 'in ' + Math.abs(time) + ' months' },
        year: (time) => { return 'in a year' },
        years: (time) => { return 'in ' + Math.abs(time) + ' years' },
    }
};