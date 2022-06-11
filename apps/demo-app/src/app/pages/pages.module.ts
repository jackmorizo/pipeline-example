import { NgModule } from "@angular/core";
import { MatCommonModule } from "@angular/material/core";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [ MatCommonModule],
    declarations: [ HomeComponent],
    exports: [HomeComponent]
})
export class AppPagesModule{}