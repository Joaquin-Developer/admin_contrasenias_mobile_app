import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs/account",
    pathMatch: "full"
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: "account",
        loadChildren: () => import("../segment/segment.module").then(m => m.SegmentPageModule)
      },
      {
        path: "contact",
        loadChildren: () => import("../input/input.module").then(m => m.InputPageModule)
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
