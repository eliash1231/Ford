import { FC } from 'react';
import { Tag } from '../../Tag/Tag';

import './CarouselItem.styles.scss';


export interface CarouselItemProps {
    imageUrl: string;
    title: string;
    subtitle?: string;
}

const CarouselItem: FC<CarouselItemProps> = ({
    imageUrl,
    title,
    subtitle

}) => {
    return <div className='carousel-item'>
        <img className='carousel-item-image'
            src={imageUrl} 
            alt="item" />
        <div className='carousel-item-tag'>
            <Tag 
                color='white'
                backgroundColor='#0068d0'
                label={title} subtitle={subtitle} />
        </div>
    </div>
}

export { CarouselItem };