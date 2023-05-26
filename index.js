const viewMore = document.getElementById('view-more')
let moreSection = document.querySelector('.more-section')
let isShow = true;

viewMore.addEventListener('click', function(){
  isShow = !isShow
  if (!isShow) {
      
      viewMore.textContent = 'View Less'
  } else {
      viewMore.textContent = 'View More'
  }
  
  moreSection.classList.toggle("hidden", isShow)
})

