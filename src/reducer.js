export const initialState ={
    basket: []
}

export const getBasketTotal =(basket) =>{
    return(basket?.reduce((amount,item) => item.price + amount,0))
}

const reducer = (state, action) =>{
    
    getActionType(action.Type);
    switch(action.type){
        case "ADD_TO_BASKET":
           
            return{
                ...state, 
                basket:[...state.basket,action.item]
                
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

// make a separate function to make the reducer easy to understand
const getActionType = (actionType) => {
    if (actionType == 'ADD_TO_BASKET') {
         return{
                ...state, 
                basket:[...state.basket,action.item]
                
            }
    }
}
export default  reducer;
