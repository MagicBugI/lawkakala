const INITIAL_STATE = [
    {
        title:'Sneakers',
        id:1,
        url:'https://i.ibb.co/tszDwvv/sneakers.jpg',
        linkUrl:'shop/sneakers'
    },
    {
        title:'Hats',
        id:2,
        url:'https://i.ibb.co/FWWvBtb/forest-1834831-640.jpg',
        linkUrl:'shop/hats'
    },
    {
        title:'T-shirt',
        id:3,
        url:'https://i.ibb.co/vLSBKDr/shirt.jpg',
        linkUrl:'shop/jackets'
    },
    {
        title:'Mens',
        id:4,
        style:'large',
        url:'https://i.ibb.co/rGpJvJj/man.jpg',
        linkUrl:'shop/mens'
    },
    {
        title:'Womens',
        id:5,
        style:'large',
        url:'https://i.ibb.co/yWtDB2Q/woman.jpg',
        linkUrl:'shop/womens'
    },
];

const directoryReducer = (state = INITIAL_STATE , actions) =>{
    switch(actions.type){
        default:
            return state
    }
}

export default directoryReducer;