# 🛍️ TechShop Paraguay - Ecommerce Funcional

Una plataforma de venta de tecnología completamente funcional enfocada en el mercado paraguayo, con productos de Notebooks, Celulares y Electrodomésticos.

## 📋 Características Principales

### 🏠 Página de Inicio (index.html)
- **Buscador:** Busca productos por nombre o marca
- **Menú de Navegación:** Acceso rápido a categorías principales
- **Carrito de Compras:** Visible desde cualquier página
- **Categorías Principales:** Notebooks, Celulares, Electrodomésticos
- **Principales Ventas:** Muestra los productos más vendidos

### 🛒 Página de Productos (products.html)
- **Filtro por Categoría:** Notebooks, Celulares, Electrodomésticos
- **Filtro por Marca:** 12 marcas reconocidas (ASUS, HP, Samsung, Apple, Xiaomi, etc.)
- **Filtro por Precio:** Rango personalizable (Menor Precio - Mayor Precio)
- **Ordenamiento:** Relevancia, Precio Ascendente, Precio Descendente, Más Nuevo
- **Búsqueda Dinámica:** Los filtros se aplican en tiempo real

### 👤 Sistema de Autenticación
- **Registro:** Crear nueva cuenta con email y contraseña
- **Inicio de Sesión:** Acceder con credenciales guardadas
- **Sesión Persistente:** Los datos se guardan en localStorage
- **Gestión de Cuenta:** Ver perfil y cerrar sesión

### 🛒 Carrito de Compras
- **Agregar/Remover Productos:** Control completo del carrito
- **Ajustar Cantidades:** Aumentar o disminuir cantidad de items
- **Cálculo de Total:** Actualización automática del precio total
- **Modal Lateral:** Carrito accesible desde cualquier página

### 💳 Página de Checkout (checkout.html)
- **Formulario de Envío:** Dirección en todos los departamentos de Paraguay
- **Métodos de Pago:**
  - **Transferencia Bancaria:** Datos de BNP e Itaú
  - **Código QR:** Para pagos móviles (BanCO, PagoMóvil, etc.)
  - **Tarjeta de Crédito:** Visa, Mastercard
  - **Cuotas:** 3 o 6 cuotas sin interés

### 📦 Resumen de Compra
- **Detalles de Items:** Cada producto en el carrito
- **Cálculo de Impuestos:** 10% IVA
- **Gastos de Envío:** Gs. 50.000 a todo Paraguay
- **Total Final:** Subtotal + Envío + Impuestos

## 🎨 Diseño Visual
- **Tema:** Azul oscuro (#1a1a2e) con acentos en cyan (#00d4ff)
- **Responsive:** ✅ Completamente adaptable a todo tipo de dispositivos:
  - 📱 Móviles pequeños (≤ 480px)
  - 📱 Móviles (481px - 768px)
  - 📋 Tablets (769px - 1024px)
  - 🖥️ Desktop (1025px - 1200px)
  - 🖥️ Desktop Grande (≥ 1201px)
- **Interfaz Intuitiva:** Siguiendo estándares de ecommerce como Bristol.com.py

## 📱 Optimización Responsive
La plataforma incluye media queries completas para garantizar una experiencia óptima en cualquier dispositivo:
- **Header y Navegación:** Se adapta automáticamente con tamaños de fuente y espaciado ajustados
- **Grid de Productos:** Se ajusta de 4 columnas en desktop a 1-2 en móviles
- **Carrito Lateral:** Ancho completo en móviles para mejor accesibilidad
- **Formularios:** Campos en una sola columna en móviles, dos columnas en desktop
- **Modales:** Optimizados para todos los tamaños de pantalla

## 🚀 Cómo Usar

### Abrir la Aplicación
1. Abre `index.html` en tu navegador favorito
2. Si es necesario, abre con un servidor local (no es obligatorio pero se recomienda)

### Crear una Cuenta
1. Haz clic en "👤 Cuenta" en la esquina superior derecha
2. Selecciona "Regístrate aquí"
3. Completa el formulario con tus datos
4. Haz clic en "Registrarse"

### Buscar Productos
- **Por Categoría:** Haz clic en Notebooks, Celulares o Electrodomésticos
- **Por Nombre:** Usa el buscador en la parte superior
- **Por Marca y Precio:** Usa los filtros en la página de productos

### Agregar al Carrito
1. Haz clic en "🛒 Agregar" en cualquier producto
2. Verás una notificación de confirmación
3. El contador del carrito se actualizará

### Proceder a Pagar
1. Haz clic en el icono del carrito 🛒
2. Revisa los productos y cantidades
3. Haz clic en "Proceder a Pagar"
4. Completa tu información personal y dirección
5. Selecciona tu método de pago preferido
6. Haz clic en "✓ Completar Compra"

## 💾 Almacenamiento de Datos
La aplicación utiliza **localStorage** del navegador para guardar:
- 🛒 Carrito de compras
- 👤 Usuario actual logueado
- 📋 Pedidos realizados
- 👥 Usuarios registrados

> **Nota:** Los datos se borran si limpias el histórico del navegador

## 📦 Productos Disponibles

### 💻 Notebooks (4 productos)
- ASUS VivoBook 15
- HP Pavilion 14
- Lenovo ThinkPad E15
- Dell Inspiron 15

### 📱 Celulares (4 productos)
- Samsung Galaxy A52
- iPhone 13
- Xiaomi Redmi Note 11
- Motorola Moto G31

### 🧊 Electrodomésticos (4 productos)
- Refrigerador Consul Frost Free
- Lavadora Electrolux 8kg
- Horno Microondas Daewoo 30L
- Televisor LG 55 pulgadas 4K

## 🎯 Métodos de Pago en Paraguay

### 🏦 Transferencia Bancaria
- **Banco Nacional del Paraguay (BNP)**
- **Banco Itaú**
- Datos bancarios mostrados durante el checkout

### 📲 Código QR
- Soporta: BanCO, PagoMóvil, STP
- Escanea y paga directamente desde tu app móvil

### 💳 Tarjeta de Crédito
- Visa, Mastercard, American Express
- Pago seguro con plataforma Bancard

### 📊 Cuotas
- 3 cuotas
- 6 cuotas
- Sin interés adicional

## 📱 Características Responsivas
- Menú adaptable para móviles
- Grid de productos ajustable
- Buscador optimizado para pantallas pequeñas
- Carrito lateral que se adapta

## 🔒 Seguridad
- Contraseñas almacenadas localmente (en desarrollo)
- Datos de usuario protegidos en localStorage
- Validación de formularios

## 🌐 Moneda
Todos los precios están en **Guaraní Paraguayo (Gs.)**

## 📞 Contacto en la Tienda
- **Teléfono:** 0991 670 000
- **Email:** info@techshop.py
- **WhatsApp:** Disponible 24/7
- **Horario:** Lun-Vie 8:00-18:00

## 🚀 Próximas Mejoras
- Integración con pasarela de pago real
- Sistema de notificaciones por email
- Historial de compras en perfil de usuario
- Carrito para usuarios sin cuenta
- Wishlist/Favoritos persistente
- Chat en vivo con soporte
- Seguimiento de pedidos en tiempo real
- Reseñas y calificaciones de productos

## 📄 Estructura de Archivos
```
ecommerce/
├── index.html          # Página de inicio
├── products.html       # Página de productos con filtros
├── checkout.html       # Página de pago
├── css/
│   └── styles.css      # Estilos principales
└── js/
    └── app.js          # Lógica de la aplicación
```

## 🎓 Tecnologías Utilizadas
- **HTML5:** Estructura semántica
- **CSS3:** Grid, Flexbox, Animaciones
- **JavaScript Vanilla:** Sin frameworks
- **LocalStorage:** Almacenamiento local
- **Responsive Design:** Mobile-first

---

**Desarrollado para el mercado paraguayo** 🇵🇾
Basado en las mejores prácticas de Bristol.com.py y Nissei.com/py

© 2026 TechShop Paraguay. Todos los derechos reservados.
