
import { RouterModule, Routes } from '@angular/router'
import { XlistComponentComponent } from "./x-list.component";
import { XCreateComponent} from "./x-create.component";
import { XEditComponent} from "./x-edit.component";
import { XDetailsComponent } from "./x-details.component";

const routes: Routes = [
    { path:'', component: XlistComponentComponent },
    { path:'x-create', component: XCreateComponent},
 // ta sciezka bedzie oczekiwala parametru o nazwie "id"
    { path:'x-edit/:id', component: XEditComponent },
    { path:'x-details/:id', component: XDetailsComponent },
]
export const Routing = RouterModule.forRoot(routes)
