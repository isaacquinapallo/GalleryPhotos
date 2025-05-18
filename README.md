# 📸 Ionic Photo Gallery App

Aplicación móvil construida con **Ionic Framework** que permite tomar, visualizar y gestionar fotos. Compatible con Android y navegadores (`ionic serve`), esta app integra funcionalidades modernas como splash screen, iconos personalizados y almacenamiento de imágenes.
APK UBICADO EN ESTE REPOSITORIO COMO app-debug.apk
---

## 🚀 Características principales

### 🌊 Splash screen
- Pantalla de bienvenida personalizada al iniciar la app.
- Funciona tanto en `ionic serve` como en Android.

### 📌 Estructura de Tabs

#### 🟦 Tab 1 – Galería local
- Muestra las **fotos previamente tomadas** desde la app.
- Las fotos se cargan **únicamente al presionar el botón** correspondiente.
- Cada foto muestra:
  - Previsualización.
  - Nombre del archivo.
- Icono del tab personalizado con una cámara.

#### 🟩 Tab 2 – Cámara y acceso rápido
- Incluye tres botones funcionales:
  1. 📷 Tomar foto con **calidad 100%**.
  2. 🖼️ Ver galería interna.
  3. 📷 Tomar otra foto con **calidad 100%** (ícono redundante para prueba de acciones múltiples).
- Guarda las fotos automáticamente para su visualización posterior.

#### 🟨 Tab 3 – Galería duplicada
- Funciona igual que el Tab 1.
- Muestra todas las fotos previamente tomadas.
- Útil para verificar consistencia de almacenamiento.

---

## 🛠️ Tecnologías utilizadas

- **Ionic Framework**
- **Capacitor Camera API**
- **Angular**
- **HTML/CSS**
- Almacenamiento en local (LocalStorage)

---

## 📷 Capturas de pantalla
Splash

![Imagen de WhatsApp 2025-05-17 a las 19 52 26_f84199b3](https://github.com/user-attachments/assets/091a63f9-3f7b-4395-91f5-fddbe68880df)


tab1

![Imagen de WhatsApp 2025-05-17 a las 19 52 26_0e23682a](https://github.com/user-attachments/assets/2381c4a2-0e19-40db-8b38-684f3130dce7)


tab2

![image](https://github.com/user-attachments/assets/b373bd2e-d8eb-4394-a32a-8e80aa334674)


tab3

![image](https://github.com/user-attachments/assets/3bf8d723-dd14-4c36-8cdb-32fdbc2e2f05)


---

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/ionic-photo-gallery-app.git
cd ionic-photo-gallery-app
npm install
ionic serve
```

 Para compilar en Android:

```bash
ionic capacitor add android
ionic capacitor copy android
ionic capacitor open android
```

## 📁 Estructura de carpetas relevante
```
src/
├── app/
│   ├── tab1/         # Galería principal
│   ├── tab2/         # Cámara y acciones rápidas
│   ├── tab3/         # Segunda galería
├── services/
│   └── photo.service.ts  # Lógica de fotos y almacenamiento
assets/
└── icon.png              # Icono personalizado del botón
```

## ✨ Créditos
Desarrollado por Isaac Quinapallo.
Basado en el tutorial oficial de Ionic y adaptado para incluir nuevas funciones y estructura personalizada.

