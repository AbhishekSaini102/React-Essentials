/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import PropTypes from 'prop-types';

function Card({username, isAvailable}) {
  // console.log(props.username);
  console.log(username);
  const [selectedSize, setSelectedSize] = useState('xs');

  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <div className="flex font-sans bg-white rounded-lg">
        <div className="flex-none w-48 relative">
          <img
            src="src\assets\tailwind Card.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {username}
            </h1>
            <div className="text-lg font-semibold text-slate-500">$110.00</div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {isAvailable ? 'In Stock' : 'Unavailable'}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 cursor-pointer ${
                    selectedSize === size
                      ? 'font-semibold bg-slate-900 text-white'
                      : 'hover:bg-slate-100'
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              🤍
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
}
Card.propTypes = {
  username: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Card
