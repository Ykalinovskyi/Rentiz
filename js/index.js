//menu

const burger = document.querySelector('.main-menu__icon')
const menu = document.querySelector('.main-menu')
const body = document.body

if(burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        body.classList.toggle('_lock')
    })
}


//---Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter')

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}