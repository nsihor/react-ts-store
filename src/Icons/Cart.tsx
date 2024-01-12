import {FC} from 'react'

interface IProps {
    viewBox?: string;
    width?: string;
    height?: string;
    className?: string;
}

const Cart: FC<IProps> = ({viewBox = '0 0 512 512', width = '24', height = '24', className}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={width}
             height={height}
             viewBox={viewBox}
             className={className}>
            <path d="M192 464c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zM512 464c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zM512 256V64H128c0-17.673-14.327-32-32-32H0v32h64l24.037 206.027C73.39 281.756 64 299.777 64 320c0 35.348 28.654 64 64 64h384v-32H128c-17.673 0-32-14.327-32-32 0-.109.007-.218.008-.328L512 256z"/>
        </svg>
    )
}

export default Cart