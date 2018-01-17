import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./pages/home.component";
import { CamaraComponent } from "./pages/camara/camara.component";
import { ListComponent } from "./pages/list/list.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "home", component: HomeComponent },
    { path: "camara", component: CamaraComponent },
    { path: "list", component: ListComponent },
    { path: "profile", component: ProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }