/**
 * ============================================
 *  SheStyle — Tienda virtual (prototipo SHEIN)
 * ============================================
 *
 *  - El array `productos` contiene todos los items
 *  - `renderizarProductos()` pinta las tarjetas en el grid
 *  - Los filtros limpian el contenedor y vuelven a pintar
 *    solo los productos de la categoría seleccionada
 *  - El modal muestra detalles del producto con selector de talla
 *  - La bolsa acumula items y total; al hacer clic en el icono
 *    se abre un panel lateral para ver/eliminar productos
 *  - Los corazones alternan entre vacío y relleno
 */

// ===== PRODUCTOS (con imágenes reales de Unsplash) =====
const productos = [
  {
    id: 1,
    nombre: 'Top Cropped de Algodón',
    precioOriginal: 349,
    precioOferta: 249,
    descuento: '29% OFF',
    categoria: 'Tops',
    descripcion: 'Algodón 100% fresco y transpirable. Corte cropped moderno, ideal para looks casuales con jeans de cintura alta.',
    imagen: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    nombre: 'Jean Recto Clásico',
    precioOriginal: 599,
    precioOferta: 429,
    descuento: '28% OFF',
    categoria: 'Jeans',
    descripcion: 'Denim elástico de alta durabilidad. Corte recto clásico con tiro medio, cinco bolsillos y cierre con cremallera.',
    imagen: 'https://images.unsplash.com/photo-1541099649105-f69ad1f60345?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    nombre: 'Blusa Off-Shoulder',
    precioOriginal: 399,
    precioOferta: 279,
    descuento: '30% OFF',
    categoria: 'Tops',
    descripcion: 'Blusa vaporosa con mangas abullonadas y cuello off-shoulder con elástico. Fresca, romántica y perfecta para primavera.',
    imagen: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    nombre: 'Collar Dorado Minimalista',
    precioOriginal: 189,
    precioOferta: 129,
    descuento: '32% OFF',
    categoria: 'Accesorios',
    descripcion: 'Collar de acero inoxidable bañado en oro de 18k. Cadena fina con dije geométrico. Hipoalergénico libre de níquel.',
    imagen: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=600&h=800&fit=crop',
  },
  {
    id: 5,
    nombre: 'Jean Mom Fit Desgastado',
    precioOriginal: 649,
    precioOferta: 459,
    descuento: '29% OFF',
    categoria: 'Jeans',
    descripcion: 'Mom fit de tiro alto con pierna recta y efecto desgastado. Mezclilla rígida con un toque vintage y roturas sutiles.',
    imagen: 'https://images.unsplash.com/photo-1604176424472-9d3e0b4999d8?w=600&h=800&fit=crop',
  },
  {
    id: 6,
    nombre: 'Top Deportivo Sin Tirantes',
    precioOriginal: 299,
    precioOferta: 199,
    descuento: '33% OFF',
    categoria: 'Tops',
    descripcion: 'Top sin tirantes con banda antideslizante. Tela de secado rápido y compresión ligera. Ideal para yoga, pilates o el día a día.',
    imagen: 'https://images.unsplash.com/photo-1571907482498-f8d4ce12d424?w=600&h=800&fit=crop',
  },
  {
    id: 7,
    nombre: 'Arete Aro Plata',
    precioOriginal: 139,
    precioOferta: 89,
    descuento: '36% OFF',
    categoria: 'Accesorios',
    descripcion: 'Aros de plata esterlina 925 con acabado pulido. Diámetro de 2.5 cm. Cierre de bisagra segura. Incluyen estuche.',
    imagen: 'https://images.unsplash.com/photo-1630019852942-f89202936d8d?w=600&h=800&fit=crop',
  },
  {
    id: 8,
    nombre: 'Jean Skinny Negro',
    precioOriginal: 549,
    precioOferta: 389,
    descuento: '29% OFF',
    categoria: 'Jeans',
    descripcion: 'Skinny fit negro intenso con elastano para máxima comodidad. Tiro alto, ideal para vestir de oficina o salir por la noche.',
    imagen: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&h=800&fit=crop',
  },
  {
    id: 9,
    nombre: 'Reloj Pulsera Metalizado',
    precioOriginal: 259,
    precioOferta: 179,
    descuento: '31% OFF',
    categoria: 'Accesorios',
    descripcion: 'Reloj analógico con caja de acero inoxidable dorado. Pulsera de malla ajustable. Movimiento de cuarzo resistente al agua.',
    imagen: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop',
  },
  {
    id: 10,
    nombre: 'Top Corset Acordonado',
    precioOriginal: 449,
    precioOferta: 319,
    descuento: '29% OFF',
    categoria: 'Tops',
    descripcion: 'Corset estilo ballcore con cordón frontal ajustable. Forro interior suave y varillas de acero. Cierre trasero con cremallera.',
    imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop',
  },
  {
    id: 11,
    nombre: 'Jean Cargo Holgado',
    precioOriginal: 699,
    precioOferta: 499,
    descuento: '29% OFF',
    categoria: 'Jeans',
    descripcion: 'Cargo holgado con bolsillos laterales amplios. Mezclilla suave lavada, cintura ajustable con cinta y corte relajado.',
    imagen: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&h=800&fit=crop',
  },
  {
    id: 12,
    nombre: 'Bolsa Tote Cuero Sintético',
    precioOriginal: 399,
    precioOferta: 269,
    descuento: '33% OFF',
    categoria: 'Accesorios',
    descripcion: 'Tote bag de cuero sintético premium con compartimento interior con cremallera. Asa corta y larga. Capacidad para laptop de 13".',
    imagen: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=800&fit=crop',
  },
];

// ===== ESTADO GLOBAL =====
// Cada item del carrito tiene: { id, nombre, precio, cantidad, talla, imagen }
// Para eliminar un elemento usamos su índice en el array con splice()
let carrito = [];
let totalCarrito = 0;
let categoriaActiva = 'all';
let favoritos = new Set();
let tallaSeleccionada = null;
let productoModalActual = null;

// ===== REFERENCIAS DOM =====
const grid = document.getElementById('productGrid');
const bagCount = document.getElementById('bagCount');
const bagWrapper = document.getElementById('bagWrapper');
const searchInput = document.getElementById('searchInput');
const filtros = document.querySelectorAll('.filter-btn');
const toast = document.getElementById('toast');
const announcementText = document.getElementById('announcementText');

const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrices = document.getElementById('modalPrices');
const modalDesc = document.getElementById('modalDesc');
const sizeOptions = document.getElementById('sizeOptions');
const modalAddBtn = document.getElementById('modalAddBtn');

const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartClearBtn = document.getElementById('cartClearBtn');
const whatsappBtn = document.getElementById('whatsappBtn');

// ===== ANUNCIOS INTERMITENTES =====
const anuncios = [
  '🔥 ENVÍO GRATIS en compras mayores a $499',
  '✨ 2x1 en Accesorios — Hoy solo',
  '💥 30% OFF extra pagando con débito',
  '🛍️ SHEIN X: Nuevos diseñadores cada semana',
];
let idxAnuncio = 0;
setInterval(() => {
  idxAnuncio = (idxAnuncio + 1) % anuncios.length;
  announcementText.textContent = anuncios[idxAnuncio];
}, 3500);

// ===== RENDERIZAR PRODUCTOS =====
/**
 * renderizarProductos(lista)
 * --------------------------
 *  Limpia el contenedor del grid y pinta las tarjetas
 *  de los productos recibidos en `lista`.
 *  Cada tarjeta incluye: imagen, corazón, descuento,
 *  nombre, precios y botón de agregar.
 *  Se usa un fragment para mejorar el rendimiento.
 */
function renderizarProductos(lista) {
  grid.innerHTML = '';
  const fragment = document.createDocumentFragment();

  lista.forEach((prod) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = prod.id;

    const esFavorito = favoritos.has(prod.id);

    card.innerHTML = `
      <div class="product-image-wrapper">
        <img class="product-image" src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
        <button class="heart-btn ${esFavorito ? 'liked' : ''}" data-id="${prod.id}">
          <svg viewBox="0 0 24 24" fill="${esFavorito ? '#e74c3c' : 'none'}" stroke="${esFavorito ? '#e74c3c' : '#555'}" stroke-width="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <span class="discount-tag">${prod.descuento}</span>
      </div>
      <div class="product-info">
        <p class="product-title">${prod.nombre}</p>
        <div class="product-prices">
          <span class="original-price">$${prod.precioOriginal.toLocaleString()}</span>
          <span class="sale-price">$${prod.precioOferta.toLocaleString()}</span>
        </div>
        <button class="add-btn" data-id="${prod.id}">Añadir a la bolsa</button>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// ===== FILTRAR POR CATEGORÍA + BÚSQUEDA =====
/**
 * aplicarFiltros()
 * -----------------
 *  Combina el filtro de categoría activa y el texto
 *  de búsqueda en tiempo real. Usa .filter() para
 *  conservar solo los productos que coincidan con
 *  ambos criterios:
 *    - Categoría: si no es 'all', filtra por categoría
 *    - Búsqueda: .toLowerCase() normaliza el texto y
 *      .includes() revisa si el nombre o la categoría
 *      contienen lo escrito por el usuario
 *  Luego renderiza el resultado.
 */
function aplicarFiltros() {
  const texto = searchInput.value.toLowerCase().trim();

  const filtrados = productos.filter((p) => {
    // Filtro por categoría activa
    if (categoriaActiva !== 'all' && p.categoria !== categoriaActiva) return false;
    // Filtro por texto de búsqueda (nombre o categoría)
    if (texto && !p.nombre.toLowerCase().includes(texto) && !p.categoria.toLowerCase().includes(texto)) return false;
    return true;
  });

  renderizarProductos(filtrados);
}

/**
 * filtrarPorCategoria(categoria)
 * -------------------------------
 *  Cambia la categoría activa y re-aplica los filtros
 *  combinados (categoría + búsqueda).
 */
function filtrarPorCategoria(categoria) {
  categoriaActiva = categoria;
  aplicarFiltros();
}

// ===== BÚSQUEDA EN TIEMPO REAL =====
/**
 *  El evento 'input' se dispara en cada tecleo.
 *  Convertimos el texto a minúsculas con .toLowerCase()
 *  y usamos .includes() para ver si coincide con el
 *  nombre o categoría del producto.
 *  Si el campo está vacío se muestran todos los productos
 *  (según la categoría activa).
 */
searchInput.addEventListener('input', aplicarFiltros);

// ===== EVENTOS: FILTROS =====
filtros.forEach((btn) => {
  btn.addEventListener('click', () => {
    filtros.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    filtrarPorCategoria(btn.dataset.category);
  });
});

// ===== MODAL: ABRIR =====
/**
 * abrirModal(productId)
 * ----------------------
 *  Busca el producto por id, llena el modal con su
 *  información (imagen, título, precios, descripción)
 *  y lo muestra con transición. Resetea la talla al abrir.
 */
function abrirModal(productId) {
  const prod = productos.find((p) => p.id === productId);
  if (!prod) return;

  productoModalActual = prod;
  tallaSeleccionada = null;

  modalImage.src = prod.imagen;
  modalImage.alt = prod.nombre;
  modalTitle.textContent = prod.nombre;
  modalDesc.textContent = prod.descripcion;
  modalPrices.innerHTML = `
    <span class="original-price">$${prod.precioOriginal.toLocaleString()}</span>
    <span class="sale-price">$${prod.precioOferta.toLocaleString()}</span>
  `;

  // Resetear selección de talla
  document.querySelectorAll('.size-btn').forEach((btn) => btn.classList.remove('active'));

  modal.classList.add('show');
  overlay.classList.add('show');
  document.body.classList.add('no-scroll');
}

// ===== MODAL: CERRAR =====
function cerrarModal() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');
  productoModalActual = null;
  tallaSeleccionada = null;
}

// ===== MODAL: SELECCIÓN DE TALLA =====
sizeOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('.size-btn');
  if (!btn) return;

  document.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  tallaSeleccionada = btn.dataset.size;
});

// ===== MODAL: AGREGAR DESDE MODAL =====
modalAddBtn.addEventListener('click', () => {
  if (!productoModalActual) return;

  if (!tallaSeleccionada) {
    mostrarToast('Selecciona una talla primero');
    return;
  }

  agregarAlCarrito(productoModalActual.id, tallaSeleccionada);
  cerrarModal();
});

// ===== MODAL / SIDEBAR: CERRAR CON OVERLAY =====
overlay.addEventListener('click', () => {
  cerrarModal();
  cerrarCarrito();
});

modalClose.addEventListener('click', cerrarModal);

// ===== AGREGAR AL CARRITO =====
/**
 * agregarAlCarrito(id, talla)
 * ----------------------------
 *  Busca el producto por id, lo agrega al array
 *  carrito (o incrementa si ya existe el mismo id + talla),
 *  actualiza el acumulado en dinero y el contador visual.
 *  Muestra un toast breve de confirmación.
 */
function agregarAlCarrito(id, talla) {
  const prod = productos.find((p) => p.id === id);
  if (!prod) return;

  // Buscar si ya existe el mismo producto con la misma talla
  const existente = carrito.find((item) => item.id === id && item.talla === talla);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precioOferta,
      cantidad: 1,
      talla: talla || 'M',
      imagen: prod.imagen,
    });
  }

  totalCarrito += prod.precioOferta;
  actualizarContador();
  actualizarCarritoDOM();
  mostrarToast(`✔ ${prod.nombre} agregado a la bolsa`);
}

// ===== ELIMINAR DEL CARRITO =====
/**
 * eliminarDelCarrito(index)
 * --------------------------
 *  Recibe el índice del elemento dentro del array `carrito`
 *  y lo elimina con splice(index, 1).
 *  Resta su precio proporcional del total y actualiza las vistas.
 *
 *  El índice se obtiene desde el data-index del botón "X"
 *  al renderizar el carrito, asegurando que siempre apunte
 *  a la posición correcta incluso después de otras eliminaciones.
 */
function eliminarDelCarrito(index) {
  const item = carrito[index];
  if (!item) return;

  // Restar el precio total de ese item (precio × cantidad)
  totalCarrito -= item.precio * item.cantidad;

  // splice(index, 1) elimina exactamente un elemento en la posición dada
  carrito.splice(index, 1);

  actualizarContador();
  actualizarCarritoDOM();
  mostrarToast(`✕ ${item.nombre} eliminado de la bolsa`);
}

// ===== VACIAR CARRITO =====
/**
 * vaciarCarrito()
 * ----------------
 *  Limpia el array carrito con longitud 0 y reinicia el total.
 *  splice(0) vacía el array por completo.
 *  Actualiza el contador, el DOM del carrito y muestra feedback.
 */
function vaciarCarrito() {
  carrito.splice(0, carrito.length);
  totalCarrito = 0;

  actualizarContador();
  actualizarCarritoDOM();
  mostrarToast('🛒 Bolsa vaciada');
  cerrarCarrito();
}

// ===== ACTUALIZAR CONTADOR =====
function actualizarContador() {
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  bagCount.textContent = totalItems;

  bagCount.classList.remove('bump');
  void bagCount.offsetWidth;
  bagCount.classList.add('bump');
}

// ===== TOGGLE FAVORITO =====
/**
 * toggleFavorito(id)
 * -------------------
 *  Alterna la presencia del id en el Set `favoritos`.
 *  Luego re-renderiza la categoria activa para reflejar
 *  el cambio visual (corazón relleno o vacío).
 */
function toggleFavorito(id) {
  if (favoritos.has(id)) {
    favoritos.delete(id);
  } else {
    favoritos.add(id);
  }
  filtrarPorCategoria(categoriaActiva);
}

// ===== TOAST =====
let toastTimeout;

function mostrarToast(mensaje) {
  toast.textContent = mensaje;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ===== SIDEBAR CARRITO: ABRIR / CERRAR =====
function abrirCarrito() {
  cartSidebar.classList.add('open');
  overlay.classList.add('show');
  document.body.classList.add('no-scroll');
}

function cerrarCarrito() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

bagWrapper.addEventListener('click', () => {
  abrirCarrito();
});

cartClose.addEventListener('click', cerrarCarrito);

// ===== SIDEBAR CARRITO: RENDERIZAR =====
/**
 * actualizarCarritoDOM()
 * -----------------------
 *  Renderiza la lista de productos dentro del carrito.
 *  Cada item muestra: imagen, nombre, talla, precio,
 *  cantidad y un botón "X" con data-index que usa splice().
 *  Si el carrito está vacío muestra un mensaje placeholder.
 */
function actualizarCarritoDOM() {
  if (carrito.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <span>Tu bolsa está vacía</span>
      </div>
    `;
    cartTotal.textContent = 'Total: $0';
    return;
  }

  const fragment = document.createDocumentFragment();

  carrito.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.imagen}" alt="${item.nombre}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-size">Talla: ${item.talla} &middot; Cant: ${item.cantidad}</div>
        <div class="cart-item-price">$${(item.precio * item.cantidad).toLocaleString()}</div>
      </div>
      <button class="cart-item-remove" data-index="${index}" aria-label="Eliminar">&times;</button>
    `;
    fragment.appendChild(div);
  });

  cartItems.innerHTML = '';
  cartItems.appendChild(fragment);

  cartTotal.textContent = `Total: $${totalCarrito.toLocaleString()}`;

  // Evento para eliminar items (usando el índice del data-index)
  cartItems.querySelectorAll('.cart-item-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // El índice se pasa como string, lo convertimos a número
      const index = Number(e.currentTarget.dataset.index);
      eliminarDelCarrito(index);
    });
  });
}

// ===== WHATSAPP — CONFIRMAR PEDIDO =====
/**
 * NÚMERO DE WHATSAPP REAL (para cuando la página se lance):
 * Reemplaza "525500000000" con el número de tu hermana
 * incluyendo el código de país sin el signo + ni espacios.
 * Ejemplo: 5215512345678 (México: 52 + 1 + 10 dígitos)
 */
const NUMERO_WHATSAPP = '525500000000';

/**
 * confirmarPedidoWhatsApp()
 * --------------------------
 *  Lee el array carrito, formatea un mensaje con la lista
 *  de productos (nombre, talla, precio, cantidad), el total
 *  y la nota de retiro en local.
 *  Abre WhatsApp web/app con el texto pre-escrito usando
 *  window.open() con la API wa.me.
 */
function confirmarPedidoWhatsApp() {
  if (carrito.length === 0) {
    mostrarToast('Agrega productos a la bolsa primero');
    return;
  }

  // Encabezado del mensaje
  let mensaje = '¡Hola! Quiero hacer un pedido en Kellys & Thiago boutique.\n\n';
  mensaje += '*Productos:*\n';

  // Listar cada producto del carrito
  carrito.forEach((item, i) => {
    mensaje += `${i + 1}. ${item.nombre}\n`;
    mensaje += `   Talla: ${item.talla} | Cant: ${item.cantidad} | $${(item.precio * item.cantidad).toLocaleString()}\n`;
  });

  // Total
  mensaje += `\n*Total a pagar:* $${totalCarrito.toLocaleString()}`;

  // Nota de entrega
  mensaje += `\n\n📦 *Método de entrega:* Retiro en el local físico`;

  // Despedida
  mensaje += `\n\n¡Gracias por tu compra! Te esperamos.`;

  // Codificar el mensaje para URL y abrir WhatsApp
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

whatsappBtn.addEventListener('click', confirmarPedidoWhatsApp);

// ===== VACIAR CARRITO (evento) =====
cartClearBtn.addEventListener('click', vaciarCarrito);

// ===== DELEGACIÓN DE EVENTOS EN EL GRID =====
/**
 *  Usamos un solo listener en el grid (delegación)
 *  para capturar:
 *    - Botón "Añadir a la bolsa" → agrega sin talla (usa 'M' por defecto)
 *    - Corazón → toggle favorito
 *    - Clic en la tarjeta (excepto botones) → abre modal de detalles
 */
grid.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-btn');
  if (addBtn) {
    e.stopPropagation();
    agregarAlCarrito(Number(addBtn.dataset.id), 'M');
    return;
  }

  const heartBtn = e.target.closest('.heart-btn');
  if (heartBtn) {
    e.stopPropagation();
    toggleFavorito(Number(heartBtn.dataset.id));
    return;
  }

  // Si el clic fue en la tarjeta (no en botones), abre el modal
  const card = e.target.closest('.product-card');
  if (card) {
    abrirModal(Number(card.dataset.id));
  }
});

// ===== INICIALIZAR =====
actualizarCarritoDOM();
filtrarPorCategoria('all');
