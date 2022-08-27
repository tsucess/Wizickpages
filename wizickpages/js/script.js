const allSideMenu = document.querySelectorAll('.sidebar .side-menu.top li a');


allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
// let closeSide = document.querySelector('.main');
let menuBar = document.querySelector('.menu');
let sidebar = document.querySelector('.sidebar');

menuBar.addEventListener('click', function () {
    	sidebar.classList.toggle('hide');
    })


