import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterLink } from "@angular/router";
//===========================================
import { MenuComponent } from "./menu/menu.component";
import { StatusComponent } from "./status/status.component";
import { ButtonComponent } from "./button/button.component";
import { CoinsComponent } from "./coins/coins.component";
import { CardListComponent } from "./card-list/card-list.component";


@NgModule({
    declarations: [MenuComponent,StatusComponent,ButtonComponent,CoinsComponent,CardListComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports:[
        CommonModule,
        IonicModule,
        RouterLink,
    ],
    exports:[MenuComponent,StatusComponent,ButtonComponent,CoinsComponent,CardListComponent]
})
export class componentModule{}