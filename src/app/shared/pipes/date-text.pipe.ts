import {Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy} from "@angular/core";

import { language_en } from "./date-text-pipe/languages/language_en";
import { language_es } from "./date-text-pipe/languages/language_es";
import { language_de } from "./date-text-pipe/languages/language_de";

const languages = {
	en: language_en,
	es: language_es,
	de: language_de,
};

const currentLanguage = languages.es;

@Pipe({
	name:'dateText',
	pure:false
})
export class DateTextPipe implements PipeTransform, OnDestroy {
	private timer: number;
	constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}
	transform(value:string) {
		this.removeTimer();
		let d = new Date(value);
		let now = new Date();
		let seconds = Math.round((now.getTime() - d.getTime())/1000);
		let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) *1000;
		this.timer = this.ngZone.runOutsideAngular(() => {
			if (typeof window !== 'undefined') {
				return window.setTimeout(() => {
					this.ngZone.run(() => this.changeDetectorRef.markForCheck());
				}, timeToUpdate);
			}
			return null;
        });
        

        let minutes = Math.round(seconds / 60);
		let hours = Math.round(minutes / 60);
		let days = Math.round(hours / 24);
		let months = Math.round(days/30.416);
        let years = Math.round(days/365);
        
        // in past: 

		if (Number.isNaN(seconds)){
			return '';
		} else if ( seconds>0 && seconds <= 45) {
			return currentLanguage.past.seconds(0);
		} else if ( seconds>0 && seconds <= 90) {
			return currentLanguage.past.minute(0);
		} else if ( minutes>0 && minutes <= 45) {
			return currentLanguage.past.minutes(minutes);
		} else if ( minutes>0 && minutes <= 90) {
			return currentLanguage.past.hour(0);
		} else if ( hours>0 && hours <= 22) {
			return currentLanguage.past.hours(hours)
		} else if ( hours>0 && hours <= 36) {
			return currentLanguage.past.day(0);
		} else if ( days>0 && days <= 25) {
			return currentLanguage.past.days(days);
		} else if ( days>0 && days <= 45) {
			return currentLanguage.past.month(0);
		} else if ( days>0 && days <= 345) {
			return currentLanguage.past.months(months);
		} else if ( days>0 && days <= 545) {
			return currentLanguage.past.year(0);
        } else if ( days>0 && days >= 545){ // (days > 545)
			return currentLanguage.past.years(years);
        }
            

        // future: 

        else if ( seconds<0 && Math.abs(seconds) <= 45) {
            return currentLanguage.future.seconds(0);
        } else if ( seconds<0 && Math.abs(seconds) <= 90) {
            return currentLanguage.future.minute(0);
        } else if ( minutes<0 && Math.abs(minutes) <= 45) {
            return currentLanguage.future.minutes(minutes);
        } else if ( minutes<0 && Math.abs(minutes) <= 90) {
            return currentLanguage.future.hour(0);
        } else if ( hours<0 && Math.abs(hours) <= 22) {
            return currentLanguage.future.hours(hours);
        } else if ( hours<0 && Math.abs(hours) <= 36) {
            return currentLanguage.future.day(0);
        } else if ( days<0 && Math.abs(days) <= 25) {
            return currentLanguage.future.days(days);
        } else if ( days<0 && Math.abs(days) <= 45) {
            return currentLanguage.future.month(0);
        } else if ( days<0 && Math.abs(days) <= 345) {
            return currentLanguage.future.months(months);
        } else if ( days<0 && Math.abs(days) <= 545) {
            return currentLanguage.future.year(0);
        } else if ( days<0 && Math.abs(days) >= 545){ // (days > 545)
			return currentLanguage.future.years(years);
        }
           
        
	}
	ngOnDestroy(): void {
		this.removeTimer();
	}
	private removeTimer() {
		if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
	}
	private getSecondsUntilUpdate(seconds:number) {
		let min = 60;
		let hr = min * 60;
		let day = hr * 24;
		if (seconds < min) { // less than 1 min, update every 2 secs
			return 2;
		} else if (seconds < hr) { // less than an hour, update every 30 secs
			return 30;
		} else if (seconds < day) { // less then a day, update every 5 mins
			return 300;
		} else { // update every hour
			return 3600;
		}
	}
}