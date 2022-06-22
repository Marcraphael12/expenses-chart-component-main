// import datas 
const Datas = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]
console.log(Datas); // output 'testing'

const graph = document.getElementById("graph");

const add_days = (data) => {
	const fund = document.createElement("p");
	fund.style.height = (data.amount + 30) + "px";

	// Find the max amount
	const max = Math.max(...Datas.map(data => data.amount));

	if (data.amount === max) {
		fund.style.backgroundColor = `hsl(186, 34%, 60%)`;
	}

	// the block that shows the amount when hover on graph
	const pop = document.createElement("div");
	pop.classList.add("pop");
	pop.innerHTML = `${data.amount}`;
 	fund.addEventListener ('mouseover', function() {
		pop.style.display = "flex";
	})

	fund.classList.add("bar");
	return (`<li class="day">
	${pop.outerHTML}
	${fund.outerHTML}
	<span>${data.day}</span>
	</li>`)
}

const day_list = Datas.map(add_days);
graph.innerHTML = day_list.join('');

console.log(day_list); // output 'testing'