import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { UnitDorArrayComponent} from './unit-dor-array/unit-dor-array.component'

const routes: Routes = [
  { path: 'formArray', component: FormArrayComponent },
  { path: 'unitformArray', component: UnitDorArrayComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
