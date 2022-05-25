import React from 'react';
import Product from './Product';

const PurchaseModal = ({cart}) => {
    const {name, img, price} = cart;
    return (
        <div>
            {/* <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">dfbndb:  {name}</h3>
                    <p class="py-4 text-secondary">{price}</p>
                    <div class="modal-action">
                        <label for="purchase-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PurchaseModal;