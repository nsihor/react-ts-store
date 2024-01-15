import {FC} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {IProduct} from "../../redux/types";

interface IProps {
    products: IProduct[];
}

const CardList: FC<IProps> = ({products}) => {
    return (
        <ListGroup as={'ul'} className='flex-wrap flex-row gap-3 justify-content-between'>
            {products.map(product => {
                return (
                    <Card as={'li'} key={product.id} className='w-25'>
                        <Card.Img variant="top" src={product.image} alt={product.title}/>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Subtitle>{product.category}</Card.Subtitle>
                            <Card.Text>{product.price}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button>Buy</Button>
                        </Card.Footer>
                    </Card>
                )
            })}
        </ListGroup>
    )
}

export default CardList