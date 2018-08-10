import { NgModule } from "../../../node_modules/@angular/core";
import { AboutComponent } from "./about.component";
import { Routes, RouterModule } from "../../../node_modules/@angular/router";

const ROUTES: Routes = [
    {path: '', component: AboutComponent}
]

// Usar odecorator passando propriedades
@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(ROUTES)]

})
export class AboutModule {

}