import { NgModule } from "@angular/core";
import { ExampleGuard } from "./example.guard";

@NgModule({
    providers: [ExampleGuard]
})
export class GuardsModule {}