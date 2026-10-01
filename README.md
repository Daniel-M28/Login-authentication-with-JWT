# Authentication System

<img width="1350" height="590" alt="image" src="https://github.com/user-attachments/assets/d28c02f3-e4be-4d74-add8-11b5e49c18a5" />


Sistema de autenticación y autorización desarrollado como proyecto **Full Stack**, implementando un flujo completo de registro, inicio de sesión y gestión de usuarios mediante **JWT**, con control de acceso basado en roles.

El proyecto fue desarrollado con una arquitectura separada entre frontend y backend, aplicando validación de datos, hashing de contraseñas, autenticación mediante tokens y protección de rutas.

## Tecnologías

### Frontend

* React
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express
* TypeScript
* Zod
* JSON Web Tokens (JWT)
* bcrypt

### Base de datos

* PostgreSQL

### Herramientas

* pnpm
* Git
* GitHub

---

## Características

* Registro de usuarios
* Inicio de sesión
* Autenticación mediante JWT
* Hashing seguro de contraseñas con bcrypt
* Validación de datos con Zod
* Protección de rutas
* Autorización basada en roles
* Roles de usuario y administrador
* Gestión de usuarios
* Manejo de errores
* API REST
* Persistencia de usuarios en PostgreSQL

---

##  Autenticación

El sistema utiliza **JSON Web Tokens (JWT)** para mantener la sesión autenticada del usuario.

El flujo principal es:

```text
Usuario
   │
   ▼
Registro / Login
   │
   ▼
Validación con Zod
   │
   ▼
Verificación de credenciales
   │
   ▼
JWT
   │
   ▼
Cliente
   │
   ▼
Rutas protegidas
```

Las contraseñas no se almacenan directamente en la base de datos. Antes de ser almacenadas son procesadas mediante **bcrypt**.

---

## Autorización basada en roles

El sistema diferencia los permisos según el rol del usuario.

### USER

Permite acceder a las funcionalidades destinadas a usuarios autenticados.

### ADMIN

Cuenta con permisos adicionales para acceder a funcionalidades administrativas.

La autorización se implementa mediante middleware en el backend, evitando que un usuario pueda acceder directamente a recursos para los que no tiene permisos.

---

## Validación de datos

Los datos recibidos por la API son validados mediante **Zod** antes de ser procesados.

Esto permite validar campos como:

* Nombre de usuario
* Email
* Contraseña
* Credenciales de inicio de sesión
* Datos requeridos por cada endpoint

Las solicitudes que no cumplen las reglas de validación reciben una respuesta de error apropiada.

---

## Arquitectura

El proyecto utiliza una arquitectura separada entre frontend y backend.

### Frontend

Desarrollado con **React + TypeScript + Tailwind CSS**, utilizando componentes reutilizables para construir la interfaz de autenticación.

### Backend

Desarrollado con **Node.js + Express + TypeScript**, encargado de:

* Autenticación
* Autorización
* Validación
* Gestión de usuarios
* Generación y validación de JWT
* Comunicación con PostgreSQL

### Base de datos

**PostgreSQL** almacena la información de los usuarios y sus roles.

---



## API

### Registro

```http
POST /api/auth/register
```

Permite registrar un nuevo usuario después de validar la información recibida.

### Login

```http
POST /api/auth/login
```

Verifica las credenciales del usuario y genera un JWT cuando la autenticación es exitosa.

## Seguridad

El proyecto implementa varias medidas para proteger la información de los usuarios:

* Contraseñas almacenadas mediante hashing con bcrypt.
* Autenticación mediante JWT.
* Middleware para proteger endpoints.
* Control de acceso basado en roles.
* Validación de entradas mediante Zod.
* Variables sensibles mediante variables de entorno.
* Separación entre lógica de autenticación y lógica de negocio.

---


Los roles principales son:

```text
USER
ADMIN
```

---

## Objetivo del proyecto

Este proyecto fue desarrollado para aplicar de forma práctica conceptos fundamentales de desarrollo **Full Stack** y seguridad de aplicaciones web, especialmente:

* Autenticación
* Autorización
* JWT
* Hashing de contraseñas
* Validación de datos
* Middleware
* API REST
* Arquitectura frontend/backend
* Bases de datos relacionales

---

## Autor

**Daniel Murillo**

Desarrollador Full Stack

* React
* TypeScript
* Node.js
* Express
* PostgreSQL
* Laravel
