import { FC } from 'react';
import { CarouselItem, CarouselItemProps } from './CarouselItem/CarouselItem';

import './Carousel.styles.scss';

interface CarouselProps {
    title: string;
    subtitle?: string;
    items: CarouselItemProps[];
}

const Carousel: FC<CarouselProps> = ({
    title,
    subtitle,
    items
}) => {
    return <div className='carousel'>
        <h2 className='carousel-title'>{title}</h2>
        <h5 className='carousel-subtitle'>{subtitle}</h5>
        <div className='carousel-items-container'>
            {
                items.map(({imageUrl, title, subtitle}) => {
                    return <CarouselItem
                        subtitle={subtitle}
                        imageUrl={imageUrl}
                        title={title} />
                        
                })
            }
        </div>
    </div>
}

export { Carousel };