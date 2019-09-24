const planning_cards = document.querySelectorAll('.planning-card');
const card_holder = document.querySelectorAll('.card-holder');

let draggedItem = null;

for (var i = 0; i < planning_cards.length; i++) {
	const card = planning_cards[i];

	card.addEventListener('dragstart', function (e) {
		e.dataTransfer.setData('text', 'anything');
		draggedItem = card;
		setTimeout(function () {
			card.style.display = 'none';
		}, 0);
	});

	card.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	});

	for (var j = 0; j < card_holder.length; j++) {
		const holder = card_holder[j];

		holder.addEventListener('dragover', function(e) {
			e.preventDefault();
		});

		holder.addEventListener('dragenter', function(e) {
			e.preventDefault();
		});

		holder.addEventListener('drop', function(e) {
			this.append(draggedItem);	
			e.preventDefault();
		});
	}
}