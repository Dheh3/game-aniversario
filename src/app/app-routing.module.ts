import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'key',
    loadChildren: () => import('./key/key/key.module').then( m => m.KeyPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./side/games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./side/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./side/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'clicker',
    loadChildren: () => import('./side/clicker/clicker.module').then( m => m.ClickerPageModule)
  },
  {
    path: 'cave',
    loadChildren: () => import('./final/cave/cave.module').then( m => m.CavePageModule)
  },
  {
    path: 'cave2',
    loadChildren: () => import('./final/cave2/cave2.module').then( m => m.Cave2PageModule)
  },
  {
    path: 'cave3',
    loadChildren: () => import('./final/cave3/cave3.module').then( m => m.Cave3PageModule)
  },
  {
    path: 'cave4',
    loadChildren: () => import('./final/cave4/cave4.module').then( m => m.Cave4PageModule)
  },
  {
    path: 'hell',
    loadChildren: () => import('./final/hell/hell.module').then( m => m.HellPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
