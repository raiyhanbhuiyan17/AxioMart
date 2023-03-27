//here we define all the application level states and define actions to make the change to the state

export const initialState ={
    basket: [], //here we'll store all the products that are pushed into the data layer and retrieve the products from that data.

}
//Selector
export const getBasketTotal =(basket) =>{
    //we've return basket total amount of price that is present in the basket, the combination of all the products.
    return(basket?.reduce((amount,item) => item.price + amount,0))
    // amount is accumulator and item is current item. accumulator keeps increasing 
    //we're incrementing the amount every time with item.price 
}

// state here is the current state  and action is here to make change to the state
// this reducer is like immutable.The state processed by the reducer function is immutable.So in coming state 
//  is an argument is never directly changed.
const reducer = (state, action) =>{
    //action.type means to access switch through type. as we declared type:"ADD_TO_BASKET"
    switch(action.type){
        case "ADD_TO_BASKET":
            //reducer function has to return a completely new state object
            return{
                ...state, // spread operator that will return the complete previous state that we are using then change the necessary i wnat to in next line.
                basket:[...state.basket,action.item] // here the basket remains as it is but i'm adding an additional item to the basket. basically adding a new product details to the data layer.
            }
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id 
                    //why action.id?If we want to remove item then with hold same id items will be deleted
                    //so we need to action.id to remove one item.
                );
    
                let newBasket = [...state.basket]; //previous basket
    
                if (index>=0) {
                    newBasket.splice(index, 1);
                } else {
                    console.warn(
                        `Can't remove product(id: ${action.id}) as its not in the basket!`
                    )
                }
                return {
                    ...state,
                    basket: newBasket
                }
    
            default:
                return state;

    }
}
export default  reducer;