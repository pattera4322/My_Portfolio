//Product List Styles
const divImgStyle = `w-full
                bg-gray-200
                rounded-lg
                overflow-hidden
                `;

const imgStyle = `w-full
                  h-full
                  object-center object-cover`;
const divProductDetailStyle = `flex justify-between`;
const productNamePriceStyle = `mt-4 text-sm font-semibold text-gray-700`;
const productDescStockStyle = `mt-1 text-sm text-gray-700`;
const divAddStyle = `mt-6`;
const addAhrefStyle = `flex
                  justify-center
                  items-center
                  px-6
                  py-3
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700`;
//Shopping Cart Styles
const liInCartStyle = `py-6 flex`;
const divImgInCartStyle = `flex-shrink-0
                      w-24
                      h-24
                      border border-gray-200
                      rounded-md
                      overflow-hidden`;
const imgInCartStyle = `w-full h-full object-center object-cover`;
const divProductInCartStyle = `ml-4 flex-1 flex flex-col text-gray-500`;
const divProductNamePriceInCartStyle = `  flex
                        justify-between
                        text-base
                        font-medium
                        text-gray-900`;

export {
  divImgStyle,
  imgStyle,
  divProductDetailStyle,
  productNamePriceStyle,
  productDescStockStyle,
  divAddStyle,
  addAhrefStyle,
  liInCartStyle,
  divImgInCartStyle,
  imgInCartStyle,
  divProductInCartStyle,
  divProductNamePriceInCartStyle
};
