import '../polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

/*  We use the bootstrap function from ng.platformBrowserDynamic, not from ng.core.
    There's a good reason. We only call "core" those capabilities that are the
    same across all platform targets. True, most Angular applications run only
    in a browser and we'll call the bootstrap function from this library most
    of the time. */
platformBrowserDynamic().bootstrapModule(AppModule);
