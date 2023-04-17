import { useContext ,useState,useEffect} from 'react';
import { Cart } from './Cart.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserHome from "../../User-header.js";
export default function CartScreen() {

    const { state, dispatch: ctxDispatch } = useContext(Cart);
    const {
      cart: { cartItems },
    } = state;

    const goback = () => {
        console.log("go back change")  
        window.history.back();
      }

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`http://localhost:5000/api/puzzles/${item._id}`);
        if (data.quantity < quantity) {
          window.alert('Sorry. Game is out of stock');
          return;
        }
        ctxDispatch({
          type: 'CART_ADD_ITEM',
          payload: { ...item, quantity },
        });
      };
      const removeItemHandler = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
      };
    
      // usr login data 

    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
  
    useEffect(() => {
      fetch("http://localhost:5000/registration/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          
          if (data.data.userType === "Admin") {
            setAdmin(true);
          }
  
          setUserData(data.data);
  
          if (data.data === "token expired") {
            alert("Token expired login again");
            window.localStorage.clear();
            window.location.href = "./Login";
          }
        });
    }, []);
  
 

      return (
        <div>
           <UserHome userData={userData} />
           <div>
            <h3>Shopping Cart</h3>
            <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <div>
              Cart is empty. <Link to="/Home1">Go To Home Page</Link>
            </div>
          ) : (
           
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link onClick={() => goback()}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                    <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                        >
                          <i className="fas fa-plus-circle"></i>
                        </Button>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                      <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  );
}
