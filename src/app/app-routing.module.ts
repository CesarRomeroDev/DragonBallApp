// Importación de módulos necesarios para configurar rutas en Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definición de las rutas principales de la aplicación.
const routes: Routes = [
  {
    // Ruta para el módulo Dragon Ball.
    path: 'dragonball',
    loadChildren: () => import('./dragon-ball/dragon-ball.module').then( m => m.DragonBallModule ),
    // Carga perezosa (lazy loading) del módulo Dragon Ball para optimizar el rendimiento.
  },
  {
    // Ruta comodín para redirigir cualquier URL no encontrada.
    path: '**',
    redirectTo: 'dragonball' // Redirecciona al módulo Dragon Ball por defecto.
  }
];

@NgModule({
  // Configuración de las rutas usando el método RouterModule.forRoot.
  imports: [RouterModule.forRoot(routes)],
   // Exporta RouterModule para que esté disponible en otros módulos.
  exports: [RouterModule]
})
// Módulo principal de configuración de rutas de la aplicación.
export class AppRoutingModule { }
