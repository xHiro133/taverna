import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';
import { ExampleGuard } from './guards/example.guard';

const routes: Routes = [
  { path: 'example', component: ExampleComponent, canActivate: [ExampleGuard], canActivateChild: [ExampleGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
