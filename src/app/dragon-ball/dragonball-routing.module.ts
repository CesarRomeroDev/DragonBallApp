// Importación de módulos esenciales para la configuración de rutas en Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importación de los componentes asociados a cada ruta.
// Estos componentes se renderizarán dependiendo del camino especificado en la URL.
import { HomeComponent } from './pages/home/home.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRaceComponent } from './pages/by-race/by-race.component';
import { ByPersonComponent } from './pages/by-person/by-person.component';
// Configuración de las rutas específicas para el módulo Dragon Ball.
export const routes: Routes = [
  {
    // Ruta para la página principal del módulo.
    path: 'home',
    component: HomeComponent // Componente que se muestra al visitar '/home'.
  },
  {
    // Ruta para buscar personajes por nombre.
    path: 'by-name',
    component: ByNameComponent // Componente que se muestra al visitar '/by-name'.
  },
  {
    // Ruta para buscar personajes por raza
    path: 'by-race',
    component: ByRaceComponent // Componente que se muestra al visitar '/by-race'.
  },
  {
    // Ruta dinámica para visualizar información de un personaje específico.
    path: 'by/:id',
    component: ByPersonComponent // Componente que se muestra para '/by/<id>'.
  },
  {
    // Ruta comodín para manejar URLs no coincidentes.
    path: '**',
    redirectTo: 'home' // Redirige a la página principal ('/home') por defecto.
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes) // Uso de forChild para definir rutas en un módulo secundario.
  ],
  exports: [
    // Exporta RouterModule para que las rutas sean accesibles en otros módulos.
    RouterModule
  ]
})

export class dragonballRoutingModule {}
