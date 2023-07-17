/** @format */
import { v4 as uuid } from 'uuid'
import React, { useContext, useState } from 'react'
import { PageContext } from '../../contexts/PageContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const AddNewAddressCard = () => {
    const { state, dispatch } = useContext(PageContext)
    const [newAddress, setNewAddress] = useState({
        name: '',
        street: '',
        pincode: '',
        city: '',
        addressState: '',
    })

    const [addNewAddress, setAddNewAddress] = useState(false)
    const addAdressClickHandler = (event) => {
        event.preventDefault()
        dispatch({
            type: 'addNewAddress',
            payload: [...state.addressData, newAddress],
        })
        toast.success('New Address added', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })
        setAddNewAddress(() => false)
    }
    return (
        <div>
            <div className="add-new-address-section">
                {state.addressData.length >= 3 ? (
                    <div>Address Limit Reached</div>
                ) : (
                    !addNewAddress && (
                        <button
                            className="add-new-address-button"
                            onClick={() => {
                                setNewAddress({
                                    name: '',
                                    street: '',
                                    pincode: '',
                                    city: '',
                                    addressState: '',
                                    id: uuid(),
                                })
                                setAddNewAddress(true)
                            }}
                        >
                            <span>
                                <i class="fa-regular fa-plus"></i>
                            </span>{' '}
                            Add new Address
                        </button>
                    )
                )}
                {addNewAddress ? (
                    <div className="add-new-address-container">
                        {state.addressData.length < 3 ? (
                            <div>
                                <form
                                    onSubmit={(event) =>
                                        addAdressClickHandler(event)
                                    }
                                >
                                    <input
                                        onChange={(event) =>
                                            setNewAddress((prev) => ({
                                                ...prev,
                                                name: event.target.value,
                                            }))
                                        }
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="name"
                                        value={newAddress.name}
                                        required
                                    />
                                    <input
                                        onChange={(event) =>
                                            setNewAddress((prev) => ({
                                                ...prev,
                                                street: event.target.value,
                                            }))
                                        }
                                        type="text"
                                        name="street"
                                        id="street"
                                        placeholder="street"
                                        value={newAddress.street}
                                        required
                                    />
                                    <input
                                        onChange={(event) =>
                                            setNewAddress((prev) => ({
                                                ...prev,
                                                pincode: event.target.value,
                                            }))
                                        }
                                        type="number"
                                        name="pincode"
                                        id="pincode"
                                        placeholder="pincode"
                                        value={newAddress.pincode}
                                        required
                                    />
                                    <input
                                        onChange={(event) =>
                                            setNewAddress((prev) => ({
                                                ...prev,
                                                city: event.target.value,
                                            }))
                                        }
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="city"
                                        value={newAddress.city}
                                        required
                                    />
                                    <input
                                        onChange={(event) =>
                                            setNewAddress((prev) => ({
                                                ...prev,
                                                addressState:
                                                    event.target.value,
                                            }))
                                        }
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder="state"
                                        required
                                    />
                                    <input type="submit" />

                                    <button
                                        onClick={() =>
                                            setAddNewAddress(() => false)
                                        }
                                    >
                                        Cancel
                                    </button>
                                </form>
                                <ToastContainer />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
