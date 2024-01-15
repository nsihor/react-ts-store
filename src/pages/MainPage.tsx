import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProducts} from '../redux/operations';
import {getProducts} from "../redux/selectors";
import CardList from "../components/CardList/CardList";
import Container from "react-bootstrap/Container";

const MainPage = () => {
    const products = useSelector(getProducts)

    useEffect(() => {
        const fetchData = async () => {
            await fetchProducts();
        }
        fetchData();
        console.log(products)
    }, []);

    return (
        <Container>
            <h1 className='text-center'>Our products</h1>
            <CardList products={products}/>
        </Container>
    );
};

export default MainPage;
