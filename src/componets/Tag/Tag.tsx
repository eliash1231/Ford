import { FC } from 'react';
import './Tag.styles.scss';

interface TagProps {
    label: string;
    color: string;
    backgroundColor: string;
    subtitle?: string;
}

const Tag: FC<TagProps> = ({
    label,
    color,
    backgroundColor,
    subtitle
}) => {
    return <div 
        className='tag'
        style={{
            color,
            backgroundColor
        }}>
        <div>{label}</div> 
        <div>{subtitle}</div>
    </div>
}

export { Tag };