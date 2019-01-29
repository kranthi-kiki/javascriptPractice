

function changeImage(){
    var images =[ 'book1.jpeg','book2.jpg','book3.jpeg','book4.jpeg'];

    var random = Math.floor(Math.random()*images.length);
    document.getElementById('image').src = images[random]

       

}

