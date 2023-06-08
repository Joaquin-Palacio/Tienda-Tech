## Imágenes del proyecto:

<img src ="https://media.discordapp.net/attachments/755272076977242193/1116516020828504214/img2.png?width=839&height=375" />
<img src ="https://media.discordapp.net/attachments/755272076977242193/1116516021281505300/img1.png?width=837&height=374" />
<img src ="https://media.discordapp.net/attachments/755272076977242193/1116516020513939456/img3.png?width=841&height=375" />


Implementar catálogo de productos con 
FILTROS COMBINADOS en el backend

Requisitos:

1. Utilizar el archivo .json adjunto como base de datos.

2. Utilizar Express para crear el servidor backend.

3. Implementar una ruta GET /products que devuelva todos los productos de la base de datos.

4. Implementar filtros combinados en la ruta GET /products para los siguientes parámetros:
- category: Filtrar por categoría de producto.
    - cell_phone (3)
    - memory (2)
    - clock (3)
    - ipad (2)
    - iphone (3)
    - tablet (3)
    - printer (1)
    - headphone (1)
- price:
    - minPrice: Filtrar por precio mínimo.
    - maxPrice: Filtrar por precio máximo.
- condition: Filtrar por condición:
    - new
    - used

5. La respuesta de la ruta /products debe devolver los productos filtrados según los parámetros recibidos (preferentemente utilizando queries).

6. Implementar React en la aplicación. Inicializar el front-end usando Vite.

7. Crear un componente de React llamado "Products" que renderice una lista de productos. Este componente debe obtener los datos del catálogo de productos utilizando una solicitud GET.

8. Crear un componente de React llamado "Sidebar" que contenga los filtros para el catálogo de productos. Este componente debe tener checkboxes para filtrar por categoría, checkboxes para filtrar los 10 productos más baratos y los 10 productos más caros, checkboxes para filtrar por "nuevo" y "usado", y una barra de búsqueda para buscar productos por título.

9. Recuerda que la ruta de la API debe aceptar consultas con los parámetros (queries) de filtrado y devolver los productos que cumplan con los filtros seleccionados.

10. El componente "Products" debe actualizar la lista de productos mostrados en respuesta a los cambios en los filtros.


# Tienda-Tech
