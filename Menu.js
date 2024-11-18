import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
   
    const menuItems = [
        {
            image: "1.png",
            itemName: "Margherita Pizza",
            price: "11.2",
            description: "A classic Margherita pizza topped with ripe tomatoes and fresh mozzarella."
        },
        {
            image: "2.jpg",
            itemName: "Cheese Platter",
            price: "15.99",
            description: "A delightful cheese platter featuring a variety of fine cheeses."
        },
        {
            image: "3.png",
            itemName: "Spaghetti Bolognese",
            price: "11.99",
            description: "A mouthwatering plate of spaghetti served with rich Bolognese sauce."
        },
        {
            image: "4.png",
            itemName: "Veggie Wrap",
            price: "6.99",
            description: "A wholesome veggie wrap filled with fresh vegetables and your choice of dressing."
        },
        {
            image: "5.png",
            itemName: "Sushi Platter",
            price: "17.99",
            description: "An assortment of delicious sushi rolls, perfect for sushi enthusiasts."
        },
        {
            image: "6.png",
            itemName: "Greek Salad",
            price: "7.99",
            description: "A classic Greek salad with fresh cucumbers, tomatoes, olives, and feta cheese."
        },
        {
            image: "7.png",
            itemName: "Chicken Alfredo",
            price: "13.99",
            description: "Tender chicken in a creamy Alfredo sauce, seasoned with garlic and Parmesan cheese."
        },
        {
            image: "8.png",
            itemName: "Chocolate Brownie",
            price: "4.99",
            description: "Indulge in a decadent chocolate brownie, a sweet treat for your taste buds."
        }
    ];

    return (
        <div className="container mt-5 menu" id="menu">
            <h5 className="text-center">Special Menu</h5>
            <h1 className="text-center">Our Specials Menu</h1>
            <div className="row">
                {menuItems.map((item, index) => (
                    <div key={index} className="col-md-6">
                        <a href="javascript:void(0)">
                            <div className="row menu-card">
                                <div className="col-md-2">
                                    <img src={item.image} alt={item.itemName} className="img-fluid" />
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col item-name">{item.itemName}</div>
                                        <div className="col-md-2 price">${item.price}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{item.description}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col text-center">
                <Link to="/menu">
                <a href="" className="custom-btn" id="order-btn">Order Now</a>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;
