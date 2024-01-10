import React from "react";


const DescriptionProduct = ({ product }) => {
    return (
        <>

            <div className="ProductDescription">
                <span className="DescriptionProduct">Descripción</span>
                <div class="separator-ui ProductDetail"></div>
                <h1 className="descriptionBox_Product">{product.Description}</h1>
            </div>
        </>
    )
}
export default DescriptionProduct;