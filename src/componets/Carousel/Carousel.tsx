import { FC } from 'react';
import { CarouselItem, CarouselItemProps } from './CarouselItem/CarouselItem';

import './Carousel.styles.scss';

interface CarouselProps {
    
    items: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({
    
    items
}) => {
    return <div className='carousel'>
       
        <div className='carousel-items-container'>
            {
                items.map(({imageUrl, title}) => {
                    return <CarouselItem
                        imageUrl={imageUrl}
                        title={title} />
                        
                })
            }
        </div>
    </div>
}

export { Carousel };