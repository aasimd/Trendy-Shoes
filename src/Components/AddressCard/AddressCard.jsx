/** @format */

import React, { useState } from 'react'
import { useContext } from 'react'
import { PageContext } from '../../contexts/PageContext'

export const AddressCard = ({ address }) => {
    const { id, name, city, addressState, pincode, street } = address
    const { dispatch, state } = useContext(PageContext)
    const [editAddress, setEditAddress] = useState(false)

    const prevAddress = {
        id: id,
        name: name,
        street: street,
        pincode: pincode,
        city: city,
        addressState: addressState,
    }
    const [newAddress, setNewAddress] = useState({
        id: prevAddress.id,
        name: prevAddress.name,
        street: prevAddress.street,
        pincode: prevAddress.pincode,
        city: prevAddress.city,
        addressState: prevAddress.addressState,
    })
    const testFunction = (id) => {
        console.log(id)
        console.log(state.addressData)
    }
    const editSaveChangesHandler = (id) => {
        setEditAddress(false)
        const newAddressArray = state.addressData.map((address) =>
            address.id === id
                ? {
                      ...address,
                      name: newAddress.name,
                      street: newAddress.street,
                      pincode: newAddress.pincode,
                      city: newAddress.city,
                      addressState: newAddress.addressState,
                  }
                : address
        )
        dispatch({ type: 'setDeliveryAddress', payload: {} })
        dispatch({ type: 'addNewAddress', payload: newAddressArray })
    }
    return (
        <li>
            {editAddress ? (
                <div className="address-edit-container">
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            placeholder={`${name}`}
                            onChange={(event) => {
                                if (event.target.value.length > 0) {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        name: event.target.value,
                                    }))
                                } else {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        name: prevAddress.name,
                                    }))
                                }
                            }}
                        />
                    </div>
                    <div>
                        <label>Street: </label>
                        <input
                            type="text"
                            placeholder={`${street}`}
                            onChange={(event) => {
                                if (event.target.value.length > 0) {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        street: event.target.value,
                                    }))
                                } else {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        street: prevAddress.street,
                                    }))
                                }
                            }}
                        />
                    </div>

                    <div>
                        <label>Pincode: </label>
                        <input
                            type="number"
                            placeholder={`${pincode}`}
                            onChange={(event) => {
                                if (event.target.value.length > 0) {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        pincode: event.target.value,
                                    }))
                                } else {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        pincode: prevAddress.pincode,
                                    }))
                                }
                            }}
                        />{' '}
                    </div>
                    <div>
                        <label>City: </label>
                        <input
                            type="text"
                            placeholder={`${city}`}
                            onChange={(event) => {
                                if (event.target.value.length > 0) {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        city: event.target.value,
                                    }))
                                } else {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        city: prevAddress.city,
                                    }))
                                }
                            }}
                        />
                    </div>
                    <div>
                        <label>State: </label>
                        <input
                            type="text"
                            placeholder={`${addressState}`}
                            onChange={(event) => {
                                if (event.target.value.length > 0) {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        addressState: event.target.value,
                                    }))
                                } else {
                                    setNewAddress((prev) => ({
                                        ...prev,
                                        addressState: prevAddress.addressState,
                                    }))
                                }
                            }}
                        />
                    </div>
                    <button
                        onClick={() => {
                            editSaveChangesHandler(id)
                            setEditAddress(false)
                        }}
                    >
                        Save Changes
                    </button>
                </div>
            ) : (
                <div className="address-container">
                    <h2>{newAddress.name}</h2>
                    <p>
                        {newAddress.street}
                        <br />
                        {newAddress.pincode}
                        <br />
                        {newAddress.city}, {newAddress.addressState}
                    </p>
                    <div className="edit-delete-address-btn">
                        <button onClick={() => setEditAddress(true)}>
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                const newarray = state.addressData.filter(
                                    (address) => address.id !== id
                                )
                                dispatch({
                                    type: 'setDeleteAddress',
                                    payload: newarray,
                                })
                                dispatch({
                                    type: 'setDeliveryAddress',
                                    payload: {},
                                })
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    )
}
