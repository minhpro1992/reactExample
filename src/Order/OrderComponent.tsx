import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux'

const OrderComponent = (): ReactElement => {
    const loginSelector = useSelector((state: any) => state.login)
    console.log('loginSelector: ', loginSelector)
    return (
        <div>Order Page</div>
    )
}

export default OrderComponent