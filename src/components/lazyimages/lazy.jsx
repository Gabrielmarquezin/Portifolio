import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


export const Imagem = ({src, effect, alt, onLoad})=>{

    const wrapperProps = {
        style: { width: '100%', height: '100%', display: 'flex' } // Adicione estilos CSS ao contêiner
    };

    return(
        <LazyLoadImage
            src={src}
            width={'100%'}
            height={'100%'}
            effect={effect}
            wrapperProps={wrapperProps}
            onLoad={onLoad}
            alt={alt}
        />
    )
}