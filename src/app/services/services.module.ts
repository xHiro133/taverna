import { NgModule } from "@angular/core";
import { ConfigService } from "./config.service";
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { FeaturesService } from "./features.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ConfigService, ApiService, FeaturesService]
})
export class ServicesModule {}