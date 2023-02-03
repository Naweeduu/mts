
let func = document.querySelector('#func');
let videoreg = document.querySelector('#videoreg');

func.addEventListener('click', function block(){
  document.querySelector('.lvl__block_videoreg').classList.remove('active');
  document.querySelector('.lvl__block_func').classList.add('active');
  videoreg.classList.remove('active');
  func.classList.add('active');
})
videoreg.addEventListener('click', function block(){
  document.querySelector('.lvl__block_func').classList.remove('active');
  document.querySelector('.lvl__block_videoreg').classList.add('active');
  func.classList.remove('active');
  videoreg.classList.add('active');
})

document.querySelectorAll('.lvl__button1').forEach(function (el){
  el.addEventListener('click', function(){
    if(el.classList.contains('active')){
      el.classList.remove('active');
      el.nextSibling.classList.remove('active');
    } else {
      document.querySelectorAll('.lvl__button1').forEach(function (element)
      {
        element.classList.remove('active')
        element.nextSibling.classList.remove('active')
        element.parentNode.previousSibling.previousSibling.classList.remove('active');
      }
      )
      
      el.classList.add('active')
      el.nextSibling.classList.add('active');
      el.parentNode.previousSibling.previousSibling.classList.add('active');
    }
  });
});
document.querySelectorAll('.lvl__button2').forEach(function (el){
  el.addEventListener('click', function(){
    if(el.classList.contains('active')){
      el.classList.remove('active');
      el.nextSibling.classList.remove('active');
    } else {
      document.querySelectorAll('.lvl__button2').forEach(function (element)
      {
        element.classList.remove('active')
        element.nextSibling.classList.remove('active')
        element.parentNode.previousSibling.previousSibling.classList.remove('active');
      }
      )
      
      el.classList.add('active')
      el.nextSibling.classList.add('active');
      el.parentNode.previousSibling.previousSibling.classList.add('active');
    }
  });
});

let func_palm = document.querySelector('#func_palm');
let videoreg_palm = document.querySelector('#videoreg_palm');

func_palm.addEventListener('click', function block(){
  document.querySelector('.palm__block_videoreg').classList.remove('active');
  document.querySelector('.palm__block_func').classList.add('active');
  videoreg_palm.classList.remove('active');
  func_palm.classList.add('active');
})
videoreg_palm.addEventListener('click', function block(){
  document.querySelector('.palm__block_func').classList.remove('active');
  document.querySelector('.palm__block_videoreg').classList.add('active');
  func_palm.classList.remove('active');
  videoreg_palm.classList.add('active');
})

document.querySelectorAll('.palm__button1').forEach(function (el){
  el.addEventListener('click', function(){
    if(el.classList.contains('active')){
      el.classList.remove('active');
      el.nextSibling.classList.remove('active');
    } else {
      document.querySelectorAll('.palm__button1').forEach(function (element)
      {
        element.classList.remove('active')
        element.nextSibling.classList.remove('active')
        element.parentNode.previousSibling.previousSibling.classList.remove('active');
      }
      )
      
      el.classList.add('active')
      el.nextSibling.classList.add('active');
      el.parentNode.previousSibling.previousSibling.classList.add('active');
    }
  });
});
document.querySelectorAll('.palm__button2').forEach(function (el){
  el.addEventListener('click', function(){
    if(el.classList.contains('active')){
      el.classList.remove('active');
      el.nextSibling.classList.remove('active');
    } else {
      document.querySelectorAll('.palm__button2').forEach(function (element)
      {
        element.classList.remove('active')
        element.nextSibling.classList.remove('active')
        element.parentNode.previousSibling.previousSibling.classList.remove('active');
      }
      )
      
      el.classList.add('active')
      el.nextSibling.classList.add('active');
      el.parentNode.previousSibling.previousSibling.classList.add('active');
    }
  });
});


document.querySelector('#conn__button__1').addEventListener('click', function(){
  document.querySelector('#conn__button__1').classList.add('active');
  document.querySelector('#conn__button__2').classList.remove('active');
  document.querySelector('#conn__button__3').classList.remove('active');
  document.querySelector('#conn_1').classList.remove('disable');
  document.querySelector('#conn_1').classList.add('active');
  document.querySelector('#conn_2').classList.remove('active');
  document.querySelector('#conn_2').classList.add('disable');
  document.querySelector('#conn_3').classList.remove('active');
  document.querySelector('#conn_3').classList.add('disable');
})
document.querySelector('#conn__button__2').addEventListener('click', function(){
  document.querySelector('#conn__button__2').classList.add('active');
  document.querySelector('#conn__button__1').classList.remove('active');
  document.querySelector('#conn__button__3').classList.remove('active');
  document.querySelector('#conn_2').classList.remove('disable');
  document.querySelector('#conn_2').classList.add('active');
  document.querySelector('#conn_1').classList.remove('active');
  document.querySelector('#conn_1').classList.add('disable');
  document.querySelector('#conn_3').classList.remove('active');
  document.querySelector('#conn_3').classList.add('disable');
})
document.querySelector('#conn__button__3').addEventListener('click', function(){
  document.querySelector('#conn__button__3').classList.add('active');
  document.querySelector('#conn__button__2').classList.remove('active');
  document.querySelector('#conn__button__1').classList.remove('active');
  document.querySelector('#conn_3').classList.remove('disable');
  document.querySelector('#conn_3').classList.add('active');
  document.querySelector('#conn_1').classList.remove('active');
  document.querySelector('#conn_1').classList.add('disable');
  document.querySelector('#conn_2').classList.remove('active');
  document.querySelector('#conn_2').classList.add('disable');
})

document.querySelectorAll(".connection__block_item").forEach(element => element.addEventListener('click', function(){
  element.classList.toggle('active');
  element.nextElementSibling.classList.toggle('active')
}))



// modal
document.querySelector('#Haval').addEventListener('click', function(){
  document.querySelector('#HavalContent').classList.add('active');
  document.querySelector('.hid').classList.add('active')
})
document.querySelector('#Toyota').addEventListener('click', function(){
  document.querySelector('#ToyotaContent').classList.add('active');
  document.querySelector('.hid').classList.add('active')
})
document.querySelector('#ToyotaClose').addEventListener('click', function(){
  document.querySelector('#ToyotaContent').classList.remove('active');
  document.querySelector('.hid').classList.remove('active');
})
document.querySelector('#HavalClose').addEventListener('click', function(){
  document.querySelector('#HavalContent').classList.remove('active');
  document.querySelector('.hid').classList.remove('active');
})
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelector('#ToyotaContent').classList.remove('active');
    document.querySelector('#HavalContent').classList.remove('active');
    document.querySelector('.hid').classList.remove('active');
    document.querySelector('.lang').classList.remove('active-modal');
  }
}); 
document.querySelector('.hid').addEventListener('click', function(){
  document.querySelector('#ToyotaContent').classList.remove('active');
  document.querySelector('#HavalContent').classList.remove('active');
  document.querySelector('.hid').classList.remove('active');
  document.querySelector('.lang').classList.remove('active-modal');

})

let sis10 = document.querySelector("#sis10");
let sis9 = document.querySelector("#sis9");
let sis10Desc = document.querySelector("#sis10Desc");
let sis9Desc = document.querySelector("#sis9Desc");


sis10.addEventListener('click', function(){
  sis10.classList.add('active');
  sis9.classList.remove('active');
  sis9Desc.classList.remove('active');
  sis10Desc.classList.add('active');
})
sis9.addEventListener('click', function(){
  sis9.classList.add('active');
  sis10.classList.remove('active');
  sis10Desc.classList.remove('active');
  sis9Desc.classList.add('active');
})


// let header  = document.querySelector('.header').getBoundingClientRect().top;
let os = document.querySelector('#os').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let mp = document.querySelector('#mp').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let mn = document.querySelector('#mn').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let cc = document.querySelector('#cc').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let u = document.querySelector('#u').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let del = document.querySelector('#del').getBoundingClientRect().top + document.body.scrollTop -  document.querySelector('.header').getBoundingClientRect().height;
let ak = document.querySelector('#ak').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let ac = document.querySelector('#ac').getBoundingClientRect().top + document.body.scrollTop - document.querySelector('.header').getBoundingClientRect().height;
let btos = document.querySelector('#btos');
let btmp = document.querySelector('#btmp');
let btmn = document.querySelector('#btmn');
let btcc = document.querySelector('#btcc');
let btu = document.querySelector('#btu');
let btdel = document.querySelector('#btdel');
let btak = document.querySelector('#btak');
let btac = document.querySelector('#btac');

// console.log(window.scrollY)
if(window.scrollY < 10){
  window.onscroll = function (e) {
    if(window.scrollY > os && window.scrollY < mp){
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btos.classList.add('active');
    } else if (window.scrollY > mp && window.scrollY < mn) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btmp.classList.add('active');
    } else if (window.scrollY > mn && window.scrollY < cc) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btmn.classList.add('active');
    } else if (window.scrollY > cc && window.scrollY < u) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btcc.classList.add('active');
    } else if (window.scrollY > u && window.scrollY < del) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btu.classList.add('active');
    } else if (window.scrollY > del && window.scrollY < ak) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btdel.classList.add('active');
    } else if (window.scrollY > ak && window.scrollY < ac) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btak.classList.add('active');
    } else if (window.scrollY > ac) {
      document.querySelectorAll('.header__nemu_list-item').forEach(function (element)
      {
        element.classList.remove('active')
      }
      )
      btac.classList.add('active');
    }
  };
} else {
  btos.addEventListener('click', function(event){
    btmp.classList.remove('active');
    btmn.classList.remove('active');
    btcc.classList.remove('active');
    btu.classList.remove('active');
    btdel.classList.remove('active');
    btak.classList.remove('active');
    btac.classList.remove('active');
    btos.classList.add('active');
  })
  btmp.addEventListener('click', function(event){
    btos.classList.remove('active');
    btmn.classList.remove('active');
    btcc.classList.remove('active');
    btu.classList.remove('active');
    btdel.classList.remove('active');
    btak.classList.remove('active');
    btac.classList.remove('active');
    btmp.classList.add('active');
  })
  btmn.addEventListener('click', function(event){
    btos.classList.remove('active');
    btmp.classList.remove('active');
    btcc.classList.remove('active');
    btu.classList.remove('active');
    btdel.classList.remove('active');
    btak.classList.remove('active');
    btmn.classList.add('active');
  })
  btcc.addEventListener('click', function(event){
    btos.classList.remove('active');
    btmp.classList.remove('active');
    btmn.classList.remove('active');
    btu.classList.remove('active');
    btdel.classList.remove('active');
    btak.classList.remove('active');
    btac.classList.remove('active');
    btcc.classList.add('active');
  })
  btu .addEventListener('click', function(event){
    btos.classList.remove('active');
    btmp.classList.remove('active');
    btmn.classList.remove('active');
    btcc.classList.remove('active');
    btdel.classList.remove('active');
    btak.classList.remove('active');
    btac.classList.remove('active');
    btu.classList.add('active');
  })
  btdel.addEventListener('click', function(event){
    btos.classList.remove('active');
    btmp.classList.remove('active');
    btmn.classList.remove('active');
    btcc.classList.remove('active');
    btu.classList.remove('active');
    btak.classList.remove('active');
    btac.classList.remove('active');
    btdel.classList.add('active');
  })
  btak.addEventListener('click', function(event){
    btos.classList.remove('active');
    btmp.classList.remove('active');
    btmn.classList.remove('active');
    btcc.classList.remove('active');
    btu.classList.remove('active');
    btdel.classList.remove('active');
    btac.classList.remove('active');
    btak.classList.add('active'); 
  })
  btac.addEventListener('click', function(event){
    btos.classList.remove('active');
    btmp.classList.remove('active');
    btmn.classList.remove('active');
    btcc.classList.remove('active');
    btu.classList.remove('active');
    btdel.classList.remove('active');
    btak.classList.remove('active');
    btac.classList.remove('active');
    btac.classList.add('active');
  })
}

document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__burger').classList.toggle('act');
  document.querySelector('.header__menu').classList.toggle('act')
  document.querySelector('.lang').classList.remove('active-modal')

});

// mobile
if(window.innerWidth <= 992){
  if(document.querySelector('.del__body')) {
    let arrImg = [];

    document.querySelectorAll('.del__body ul li').forEach((e) => {
      e.querySelectorAll('img').forEach((a) => {
        arrImg.push(a)
      })
    })
    let textImg = document.createElement('p')
    textImg.classList.add('del__body-text')
    arrImg[0].before(textImg.textContent = 'Лончер для мультимедийной системы')
    arrImg[1].before(textImg.textContent = 'Мультимедийная система')
    arrImg[2].before(textImg.textContent = 'Видеорегистратор')

    arrImg[3].before(textImg.textContent = 'Лончер для мультимедийной системы')
    arrImg[4].before(textImg.textContent = 'Мультимедийная система')
    arrImg[5].before(textImg.textContent = 'Видеорегистратор')

    arrImg[6].before(textImg.textContent = 'Лончер для мультимедийной системы')
    arrImg[7].before(textImg.textContent = 'Мультимедийная система')
    arrImg[8].before(textImg.textContent = 'Видеорегистратор')
  }
  if(document.querySelector('.lvl__block_ul')){
    let imgageUl = document.createElement('img')
    imgageUl.classList.add('imgageUl-picture');

    document.querySelector('.lvl__footer').before(imgageUl);
    
    document.querySelectorAll('.photoOne').forEach((e) => {
      if(e.classList.contains('active') == true) {
        imgageUl.src = e.lastElementChild.src;
      }
    })

    document.querySelectorAll('.lvl_header_buttons-item').forEach((e) => {
      e.addEventListener('click', function() {

      
        
      if(document.querySelector('.lvl__block_func').classList.contains('active') == true){
        document.querySelectorAll('.lvl__block_func-item').forEach((e) => {
          e.addEventListener('click', function() {
            imgageUl.src = e.firstElementChild.firstElementChild.lastElementChild.src
          });
        })
        imgageUl.src = document.querySelectorAll('.photoOne')[0].lastElementChild.src;
      }


      if(document.querySelector('.lvl__block_videoreg').classList.contains('active') == true) {
          document.querySelectorAll('.photoTwo').forEach((e) => {
            imgageUl.src = e.lastElementChild.src
          })
          document.querySelectorAll('.lvl__block_func-item').forEach((e) => {
            e.addEventListener('click', function() {
              document.querySelectorAll('.photoTwo').forEach((e) => {
                if(e.classList.contains('active') == true){
                  console.log(123, e.lastElementChild.src)
                  imgageUl.src = e.lastElementChild.src
                }
              })
            })
          })
      } 

    })
    });
  }

  if(document.querySelector('.palm__block_ul')) {
    let imgUlTwo = document.createElement('img');
    imgUlTwo.classList.add('imgUlTwo-picture');
    document.querySelector('.palm').append(imgUlTwo);

    document.querySelectorAll('.photoAuto').forEach((e)=> {
      if(e.classList.contains('active') == true) {
        imgUlTwo.src = e.lastElementChild.src;
      }
    })
    if(document.querySelector('.palm__block_func').classList.contains('active') == true) {
      document.querySelectorAll('.palm__block_func-item').forEach((e) => {
        e.addEventListener('click', function() {
          imgUlTwo.src =  e.firstElementChild.firstElementChild.lastElementChild.src;
          console.log(e.firstElementChild.firstElementChild.lastElementChild.src);
        });
      })
    }
    // 
    document.querySelectorAll('.palm_header_buttons-item').forEach((e) => {
      e.addEventListener('click', function() {
        if(document.querySelector('.palm__block_videoreg').classList.contains('active') == true) {
 
          imgUlTwo.src = document.querySelectorAll('.photoAutoTwo')[0].lastElementChild.src;

          document.querySelectorAll('.palm__block_func-item').forEach((e) => {
            e.addEventListener('click', function() {
              imgUlTwo.src = e.firstElementChild.firstElementChild.lastElementChild.src;
            });
          })
        }
        if(document.querySelector('.palm__block_func').classList.contains('active') == true) {
          imgUlTwo.src = document.querySelectorAll('.photoAuto')[0].lastElementChild.src;

        }
      })
    })
  }
}
if(window.innerWidth <= 480){
  let btnOpen = document.createElement('button');
  btnOpen.classList.add('btnOpen');
  btnOpen.textContent = 'Подробнее';
  document.querySelector('.about_block_content').append(btnOpen);

  btnOpen.addEventListener('click', function() {
      document.querySelector('.about_block_content').classList.toggle('active');
      btnOpen.classList.toggle('active');
      if(btnOpen.classList.contains('active') == true) {
        btnOpen.innerHTML = '&nbsp&nbsp&nbsp&nbspСкрыть&nbsp&nbsp&nbsp&nbsp';
      }
      if(btnOpen.classList.contains('active') == false) {
        btnOpen.innerHTML = 'Подробнее';
      }
  })
  
}
document.querySelectorAll('.header__nemu_list-item').forEach((e) => {
  e.addEventListener('click', function() {
      document.querySelector('.header__menu').classList.remove('act')
      document.querySelector('.header__burger').classList.remove('act')
      document.querySelector('.lang').classList.remove('active-modal');
  });
})

let showMore = false;
document.querySelector('#showMore').addEventListener('click', function (e){
    e.preventDefault();
    if(document.querySelector('#text').classList.contains('active')){
      document.querySelector('#showMore').innerHTML ='Подробнее';
    } else {
      document.querySelector('#showMore').innerHTML ='&nbsp&nbsp&nbsp&nbspСкрыть&nbsp&nbsp&nbsp&nbsp';
    }
    document.querySelector('#text').classList.toggle('active');
})


document.querySelectorAll('.pm').forEach((e) => {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector("[aria-label='Go to slide 1']").click ()
  })
})
document.querySelectorAll('.mp').forEach((e) => {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector("[aria-label='Go to slide 2']").click ()
  })
})
document.querySelectorAll('.up').forEach((e) => {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector("[aria-label='Go to slide 3']").click ()
  })
})
document.querySelectorAll('.kn').forEach((e) => {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector("[aria-label='Go to slide 4']").click ()
  })
})
document.querySelectorAll('.cc').forEach((e) => {
  e.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector("[aria-label='Go to slide 5']").click ()
  })
})

document.querySelectorAll('.red').forEach((e) => {
  e.addEventListener('click', function (event) {
    event.preventDefault();
  })
})

document.querySelector('.ac-lang').addEventListener('click', function(){
  document.querySelector('.lang').classList.toggle('active-modal');
})
document.querySelector('.act-ln').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('.lang').classList.toggle('active-modal');
})
