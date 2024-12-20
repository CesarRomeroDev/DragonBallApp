# Changelog

Todas las modificaciones importantes de este proyecto se documentarán en este archivo.

El formato se adhiere a [Keep a Changelog](https://keepachangelog.com/) y sigue la versión semántica [SemVer](https://semver.org/).

## Cómo escribir registros por actualización

1. Título de la versión: ## [x.y.z] - YYYY-MM-DD

- x.y.z es el número de versión (siguiendo SemVer: mayor, menor, parche).
- YYYY-MM-DD es la fecha de la versión.

2. Categorías de cambios:

- Usa “Added” para lo nuevo.
- Usa “Changed” para modificaciones.
- Usa “Fixed” para errores corregidos.
- Usa “Removed” para lo eliminado.

3. Formato:

- Enumera cada punto con guiones (-).
- Sé claro y conciso.

## [1.1.0] -

### Changed - 2024-12-19

- Refactorización del codigo en lo servicios.
- Se cambia el evento (keyup.enter) a --> (Keyup) y nuevo Subject para utilizar un pip en el debounceTime de entrada de texto.

### Added - 2024-12-19

- Se crea spinner de busqueda como componente en shared/components/spin-Search
- Se realiza spinner de busqueda en byName y ByRace.
- Se agrega caja de texto (Warning alert) para indicar que no hay personajes que mostrar en el componente DragonBall Card.

### Added - 2024-12-18

- Se crea archivo loading-circle component para la carga de imagen alternativa de la imagen de planeta.
- Se agrega componente loading-car a los cards de transformaciones de los personajes.

## [1.0.0] - 2024-12-17

### Added

- Primera versión estable del proyecto.
- Personajes implementados en componentes.
