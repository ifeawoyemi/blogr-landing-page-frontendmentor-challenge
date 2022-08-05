const toggle = () => {
  const nav = document.querySelector('.navbar');
  const subMenu = document.querySelector('dropbtn');
  
  if (window.getComputedStyle(nav).display === "none") {
    nav.style.display = "block";
    
  } else {
    nav.style.display = 'none';
  }
  
};

function item(){
  document.querySelector('.dropdown-content').style.display.toggle('show');
}

