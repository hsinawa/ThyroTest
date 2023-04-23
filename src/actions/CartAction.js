export const AddToCart=(testsdata )=>(dispatch ,getState )=>{

    const CartItem ={
        name : testsdata.name ,
        _id : testsdata._id ,
        price : testsdata.price ,
        reporttime: testsdata.reporttime,
        duration:testsdata.duration
       
        
    }

    dispatch({type:'ADDTOCART' , payload:CartItem })

    localStorage.setItem('CartItem' , JSON.stringify( getState().CartReducer.CartItem ) )

}

export const DeleteFromCart=(item)=>(dispatch , getState)=>{
    
    
    dispatch({ type:'DELETEFROMCART' , payload:item })
    localStorage.setItem('CartItem' , JSON.stringify( getState().CartReducer.CartItem ) )
}