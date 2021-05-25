const initialState = {
    products : [
        {name:'Iphone 12',image :'https://eshop.orange.jo:250/app-images/thumbs/0001404_apple-iphone-12-pro-max128gb6gbgraphite.jpeg',description:"The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design.",cost:1200,quantity:500,category:"phones"},
        {name:'Samsung Note 10',image :'https://www.mytrendyphone.eu/images/Samsung-Galaxy-Note10-Duos-256GB-Pre-owned-Good-condition-Aura-Black-14042020-01-t.jpg',description:"Samsung Galaxy Note 10 is powered by a 1.9GHz octa-core Samsung Exynos 9825 processor that features 4 cores clocked at 1.9GHz, 2 cores clocked at 2.4GHz and 2 cores clocked at 2.7GHz. It comes with 8GB of RAM. The Samsung Galaxy Note 10 runs Android 9 Pie and is powered by a 3500mAh battery.",cost:1000,quantity:400,category:"phones"},
        {name:'Huawei P',image :'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y7a/list-img/green-list.png',description:"Huawei P Smart (2019) smartphone was launched in December 2018. The phone comes with a 6.21-inch touchscreen display with a resolution of 1080x2340 pixels. It comes with 3GB of RAM. The Huawei P Smart (2019) runs Android 9 Pie and is powered by a 3400mAh battery.",cost:800,quantity:350,category:"phones"},
        {name:"React",image:'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71kevjBxElL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX425_.png',description:"Cool React T-Shirt",cost:30,quantity:500,category:"shirts"},
        {name:"JavaScript",image:'https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7CA1U08nTxXML.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425._SX._UX._SY._UY_.png',description:"The most wanted Shirt in our store",cost:35,quantity:250,category:"shirts"},
        {name:"Java",image:'https://images.lookhuman.com/render/standard/Qe7zCXWNatsTXXuTN7zExIXcHMKImMbu/3600-red-z1-t-coders-run-on-java.jpg',description:"This Shirt is only for the Java lovers",cost:25,quantity:450,category:"shirts"}
    ]
}


const buy = (state = initialState , action) =>{
    const {type , payload} = action;

    switch(type){
        case"INCREASE_COUNT" :
        const increaseProduct = state.products.map(product=>{
            if(payload === product.name){
                return {...product,quantity:product.quantity + 1}
            }else{
                return product
            }
        })
            return {products:increaseProduct}
        case "REDUCE_COUNT" :
            const reducedProduct = state.products.map(product=>{
                if(payload === product.name){
                    return {...product,quantity:product.quantity - 1}
                }else{
                    return product
                }
            })
            return {products:reducedProduct}
        default:
            return state;

    }
}

export default buy;