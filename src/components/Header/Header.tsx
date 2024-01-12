import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Cart from "../../Icons/Cart";

const Header = () => (
    <Navbar expand="lg" className="bg-info-subtle">
        <Container>
            <Link to={"/"} className='navbar-brand fw-semibold fs-2 p-0' >Store</Link>
            <Link to={"/cart"} className='icon-link'>
                <Cart/>
            </Link>
        </Container>
    </Navbar>
)

export default Header;