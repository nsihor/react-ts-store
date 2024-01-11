import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
// @ts-ignore
import cartSvg from '../../images/cart.svg'
const Header = () => (
    <Navbar expand="lg" className="bg-primary-subtle">
        <Container>
            <Link to={"/"} className='navbar-brand' >Store</Link>
            <Link to={"/cart"} className='icon-link'>
                <svg xmlns="http://www.w3.org/2000/svg" width='21' viewBox="0 0 512 512">
                    <path
                        d="M192 464c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zM512 464c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zM512 256V64H128c0-17.673-14.327-32-32-32H0v32h64l24.037 206.027C73.39 281.756 64 299.777 64 320c0 35.348 28.654 64 64 64h384v-32H128c-17.673 0-32-14.327-32-32 0-.109.007-.218.008-.328L512 256z"/>
                </svg>
            </Link>
        </Container>
    </Navbar>
)

export default Header;