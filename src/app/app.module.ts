import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {TreeComponent} from './tree/tree.component';
import {FourComponent} from './four/four.component';

@NgModule({
    declarations: [
        AppComponent,
        OneComponent,
        TwoComponent,
        TreeComponent,
        FourComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
