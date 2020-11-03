export const addItemToCart = (arr , item )=>{
    const existItem = arr.find(curItem => curItem.id === item.id);

    if(existItem){
        return arr.map(curItem=>
            curItem.id === item.id ?
            {...curItem , quantity : curItem.quantity + 1}:
            curItem
        )
    }
    return [...arr , {...item , quantity : 1}];
}

export const increaseCurrentItem = (arr , item )=>{
    return arr.map(curItem=>
        curItem.id === item.id ?
        {...curItem , quantity : curItem.quantity + 1}:
        curItem
    )
}
export const decreaseCurrentItem = (arr , item)=>{
    return arr.map(curItem=>
        curItem.id === item.id ?
        {...curItem , quantity : curItem.quantity - 1}:
        curItem
    )
}
export const removeItemFromCart = (arr , item) =>{ 
    return arr.filter(curItem => curItem.id !== item.id);
}