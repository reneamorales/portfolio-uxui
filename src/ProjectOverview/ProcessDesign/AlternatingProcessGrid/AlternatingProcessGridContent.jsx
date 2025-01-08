
export const spaces = {
    title: 'Espaciados',  
    item: [
        { 
            imageSrc: 'https://picsum.photos/450/500', 
            description: (
                <>
                    <p>
                        Para estructurar los espaciados en el sitio, utilicé principalmente una escala de 8 píxeles en muchos casos (8, 16, 24, 32, 40) complementándola con otros valores específicos, como <strong>4, 10, 12, 20, 46 y 60</strong> según las necesidades de cada elemento. Para los márgenes y los espacios entre secciones, empleé valores mayores, como <strong>64, 70, 80, 100, 104, 120 y 178</strong>, proporcionando aire y balance en la composición visual. <u>Esta estructura asegura que el contenido sea fácilmente legible y que cada elemento destaque en armonía dentro de la interfaz.</u>
                    </p>
                </>
            )
        }
    ]     
};


export const interaction ={
    title: 'Interacción y Microinteracciones',
    item: [
        { imageSrc: 'https://picsum.photos/450',
         description: (
            <>
            <p>
            Para enriquecer la experiencia del usuario, implementé microinteracciones y transiciones que aportan dinamismo y fluidez. Utilicé animaciones de hover, focused ó clicked en botones y enlaces, lo que proporciona una respuesta visual inmediata al usuario. Además, <u>las transiciones entre pantallas son suaves, empleando easing como ease-in y ease-in-out, con duraciones de 600 ms, 800 ms y 1000 ms.</u>
            </p>
            </>
         ) },
        { imageSrc: 'https://picsum.photos/450', 
          description: (
            <>
            <p>
               <strong>Para los banners y tarjetas, apliqué animaciones ease-in-out y ease-out-back,</strong> lo que les da un toque atractivo y visualmente agradable. <u>Los carruseles automáticos de las tarjetas de testimonios cuentan con una animación ease-in de 5000 ms,</u> asegurando una navegación fluida y sin interrupciones. Esto mantiene el enfoque del usuario en el contenido y mejora la interacción general con la interfaz.
            </p>
            </>
          )
        }
    ]  
}