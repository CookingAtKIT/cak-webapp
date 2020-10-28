import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homescreen',
    pathMatch: 'full'
  },
  {
    path: 'homescreen',
    loadChildren: () => import('./pages/homescreen/homescreen.module').then( m => m.HomescreenPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'recipe/:id',
    loadChildren: () => import('./pages/recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'allergies',
    loadChildren: () => import('./pages/allergies/allergies.module').then( m => m.AllergiesPageModule)
  },
  {
    path: 'searchfilter',
    loadChildren: () => import('./pages/searchfilter/searchfilter.module').then( m => m.SearchfilterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule {}
