import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
// Provider
// Cunsumer

class ProductProvider extends Component {

    state ={
        products:storeProducts,
        detailProduc:detailProduct,
    }
    render() {
        return (
            <ProductContext.Provider value="Hello From Phone App">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
