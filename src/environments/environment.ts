// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { cloudinaryKeys } from "./cloudinary-keys";

export const environment = {
  production: false,
  agm: {
    api_key: 'AIzaSyCEqQWUTDJJS6uWJXAdWQRA381hGoI1oHk'
  },
  cloudinary: {
    cloud_name: 'alanllamas',
    upload_preset: 'unsigned-upload-preset',
    api_key: cloudinaryKeys.api_key,
    api_secret: cloudinaryKeys.api_secret
  },

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
