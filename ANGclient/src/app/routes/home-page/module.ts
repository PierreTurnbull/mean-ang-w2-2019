/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { HomePageComponent } from './home-page.component';
    import { Routing } from "./router";
    import { MerchantService } from "../../services/merchant/merchant.service"
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ 
            CommonModule, 

            // Ajouter le router dans la tableau des imports
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//