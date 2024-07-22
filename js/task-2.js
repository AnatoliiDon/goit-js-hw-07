const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryItemEl = document.createElement('li');
galleryItemEl.classList.add('gallery-item', 'js-gallery-item');

const galleryImg = document.createElement('img');
galleryImg.classList.add('gallery-img', 'js-gallery-img');
galleryImg.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260';
galleryImg.alt = 'White and Black Long Fur Cat';
galleryItemEl.append(galleryImg);

const galleryItemEl1 = document.createElement('li');
galleryItemEl1.classList.add('gallery-item', 'js-gallery-item');

const galleryImg1 = document.createElement('img');
galleryImg1.classList.add('gallery-img', 'js-gallery-img');
galleryImg1.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260';
galleryImg1.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
galleryItemEl1.append(galleryImg1);

const galleryItemEl2 = document.createElement('li');
galleryItemEl2.classList.add('gallery-item', 'js-gallery-item');

const galleryImg2 = document.createElement('img');
galleryImg2.classList.add('gallery-img', 'js-gallery-img');
galleryImg2.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260';
galleryImg2.alt = 'Group of Horses Running';
galleryItemEl2.append(galleryImg2);

// вставка

const galleryListEl = document.querySelector('.gallery');
galleryListEl.append(galleryItemEl, galleryItemEl1, galleryItemEl2);