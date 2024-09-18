// script.js  
document.addEventListener('DOMContentLoaded', function() {  
    const gallery = document.querySelector('.gallery');  
    const images = [  
        'image1.jpg',  
        'image2.jpg',  
        'image3.jpg',  
        // 添加更多图片路径  
    ];  
  
    images.forEach(src => {  
        const img = document.createElement('img');  
        img.src = src; // 假设图片与HTML文件位于同一目录  
        gallery.appendChild(img);  
    });  
});