import React, { useEffect, useState } from 'react'; // Importa React y hooks
import Empresa from '../templates/Empresa'; // Importa el componente Home
import Sucursal from '../templates/Sucursal'; // Importa el componente About

const App = () => {
    // Estado para almacenar la ruta actual
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // Efecto para manejar los cambios de ubicación
    useEffect(() => {
        // Función para manejar el cambio de ubicación
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname); // Actualiza la ruta actual
        };

        // Escucha el evento de cambio de ubicación
        window.addEventListener('popstate', handleLocationChange);

        // Limpieza del efecto para eliminar el listener al desmontar
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []); // Solo se ejecuta una vez al montar el componente

    // Función para navegar a una nueva ruta
    const navigate = (path) => {
        window.history.pushState({}, '', path); // Cambia la URL sin recargar la página
        setCurrentPath(path); // Actualiza la ruta actual en el estado
    };

    // Determina qué componente renderizar según la ruta actual
    let Component; // Variable para almacenar el componente a renderizar
    switch (currentPath) {
        case '/about':
            Component = About; // Si la ruta es '/about', usa el componente About
            break;
        case '/contact':
            Component = Contact; // Si la ruta es '/contact', usa el componente Contact
            break;
        case '/':
        default:
            Component = Home; // Por defecto, usa el componente Home
            break;
    }

    return (
        <div>
            <nav>
                {/* Botones para navegar entre las diferentes páginas */}
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/about')}>About</button>
                <button onClick={() => navigate('/contact')}>Contact</button>
            </nav>
            <Component /> {/* Renderiza el componente correspondiente */}
        </div>
    );
};

export default App; // Exporta el componente App para que pueda ser utilizado en otros archivos
