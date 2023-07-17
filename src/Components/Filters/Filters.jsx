/** @format */
import './Filters.css'
import React, { useContext } from 'react'
import { PageContext } from '../../contexts/PageContext'

const ratings = ['4', '3', '2', '1']

export const Filters = ({ setShowFiltersForSmallDisplays }) => {
    const { state, dispatch } = useContext(PageContext)
    const categoryCheckboxHandler = (event) => {
        const name = event.target.value
        const isChecked = event.target.checked
        isChecked
            ? dispatch({
                  type: 'setCategoryFilters',
                  payload: [...state.categoryFilters, name],
              })
            : dispatch({
                  type: 'removeCategoryFilters',
                  payload: [
                      ...state.categoryFilters.filter(
                          (category) => category !== name
                      ),
                  ],
              })
    }
    const genderCheckboxHandler = (event) => {
        const name = event.target.value
        const isChecked = event.target.checked
        isChecked
            ? dispatch({
                  type: 'setGenderFilters',
                  payload: [...state.genderFilters, name],
              })
            : dispatch({
                  type: 'removeGenderFilters',
                  payload: [
                      ...state.genderFilters.filter(
                          (gender) => gender !== name
                      ),
                  ],
              })
    }
    const clearFiltersHandler = () => {
        dispatch({
            type: 'clearFilters',
        })
        setShowFiltersForSmallDisplays(false)
    }
    return (
        <div className="filters">
            <b style={{ fontSize: '24px' }}>Filters</b>

            <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={(event) =>
                            dispatch({
                                type: 'setShowOutOfStock',
                                payload: event.target.checked,
                            })
                        }
                        checked={state.showOutOfStock}
                    />
                    Also show Out of Stock products
                </label>
            </div>
            <div className="price-filter">
                <label htmlFor="price">
                    <b>Price</b>
                    <br />
                    <datalist id="">
                        <option value={500}>{500}</option>
                        <option value={15000 * 0.5}>{15000 * 0.5}</option>
                        <option value={15000}>{15000}</option>
                    </datalist>
                    <input
                        onChange={(event) => {
                            dispatch({
                                type: 'setSelectedPrice',
                                payload: event.target.value,
                            })
                            dispatch({
                                type: 'setFilteredByPrice',
                                payload: true,
                            })
                        }}
                        type="range"
                        max={15000}
                        min={500}
                        list="markers"
                        id="price"
                        name="temp"
                        value={state.selectedPrice}
                    />
                </label>
            </div>
            <div className="gender-filter">
                <b>Gender:</b>
                <ul>
                    {['Men', 'Women', 'Unisex'].map((gender) => (
                        <li>
                            <label>
                                <input
                                    type="checkbox"
                                    value={gender}
                                    checked={state.genderFilters.includes(
                                        gender
                                    )}
                                    onClick={(event) =>
                                        genderCheckboxHandler(event)
                                    }
                                />
                                {gender}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="categories-filter">
                <b>Categories</b>

                <div>
                    <ul>
                        {state.categories.map((category) => (
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={category.categoryName}
                                        checked={state.categoryFilters.includes(
                                            category.categoryName
                                        )}
                                        onChange={(event) =>
                                            categoryCheckboxHandler(event)
                                        }
                                    />
                                    {category.categoryName}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="ratings-stars-list-filter">
                <b>Ratings:</b>
                <ul>
                    {ratings.map((rating) => (
                        <li>
                            <label>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={rating}
                                    checked={rating === state.selectedRating}
                                    onChange={(event) =>
                                        dispatch({
                                            type: 'setSelectedRating',
                                            payload: event.target.value,
                                        })
                                    }
                                />
                                {rating} stars & above
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sort-by-price-filter">
                <b>Sort by:</b>
                <ul>
                    <li>
                        <label>
                            <input
                                checked={'desc' === state.sortType}
                                type="radio"
                                name="sort-type"
                                value="desc"
                                onChange={(event) =>
                                    dispatch({
                                        type: 'setSortType',
                                        payload: event.target.value,
                                    })
                                }
                            />
                            Price High to Low
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                checked={'asc' === state.sortType}
                                type="radio"
                                name="sort-type"
                                value="asc"
                                onChange={(event) =>
                                    dispatch({
                                        type: 'setSortType',
                                        payload: event.target.value,
                                    })
                                }
                            />
                            Price Low to High
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                checked={'ratings-desc' === state.sortType}
                                type="radio"
                                name="sort-type"
                                value="ratings-desc"
                                onChange={(event) =>
                                    dispatch({
                                        type: 'setSortType',
                                        payload: event.target.value,
                                    })
                                }
                            />
                            Ratings High to Low
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                                checked={'ratings-asc' === state.sortType}
                                type="radio"
                                name="sort-type"
                                value="ratings-asc"
                                onChange={(event) =>
                                    dispatch({
                                        type: 'setSortType',
                                        payload: event.target.value,
                                    })
                                }
                            />
                            Ratings Low to High
                        </label>
                    </li>
                </ul>
            </div>
            <div className="size-filter">
                <ul>
                    <b>Size:</b>
                    <li>
                        <label>
                            <input
                                checked={'all' === state.selectedSize}
                                type="radio"
                                name="size"
                                value={'all'}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'setSelectedSize',
                                        payload: event.target.value,
                                    })
                                }
                            />
                            All
                        </label>
                    </li>
                    {state.shoeSizes.map((size) => (
                        <li>
                            <label>
                                <input
                                    checked={
                                        size.toString() === state.selectedSize
                                    }
                                    type="radio"
                                    name="size"
                                    value={size}
                                    onChange={(event) =>
                                        dispatch({
                                            type: 'setSelectedSize',
                                            payload: event.target.value,
                                        })
                                    }
                                />
                                UK {size}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='apply-clear-buttons'>
                <div className="apply-button">
                    <button
                        onClick={() => setShowFiltersForSmallDisplays(false)}
                    >
                        Apply
                    </button>
                </div>
                <div>
                    <button
                        className="clear-filters-button"
                        onClick={() => clearFiltersHandler()}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}
