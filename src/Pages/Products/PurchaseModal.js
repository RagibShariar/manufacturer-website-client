import React from 'react';
import Product from './Product';

const PurchaseModal = ({cart}) => {
    const {name, img, price} = cart;
    return (
        <div>
            {/* <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">dfbndb:  {name}</h3>
                    <p className="py-4 text-secondary">{price}</p>
                    <div className="modal-action">
                        <label for="purchase-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PurchaseModal;