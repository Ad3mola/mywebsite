window.onload = function(){
    let name = localStorage.getItem('user');
    let store = document.querySelector(".store");
    store.textContent = "  Hello,  " + name;
    loadProducts();
}
 var images = [{image  : "gallery/makeup1.webp", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup2.webp", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup3.webp", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup4.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup5.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup6.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup7.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                {image : "gallery/makeup8.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},];
 function loadProducts(){
    images.forEach(function(image){
        var img = document.createElement('img');
        img.src = image.image;
        document.querySelector(".view").appendChild(img);
    });   
 };

 /*   const view = document.querySelector(".view");
    
    
 const products = [{image  : "gallery/makeup1.webp", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup2.webp", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup3.webp", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup4.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup5.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup6.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup7.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
                 {image : "gallery/makeup8.jpeg", productName : "product1", price : "$200", description : "lorem ipsum dolor"},
];
 function loadProducts(){
     products.forEach(function(newI){
        view.innerHTML += '<img src="'+ newI.image+"'/>';
     })
 }; */