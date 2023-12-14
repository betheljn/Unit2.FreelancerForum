const freelancers = [
    {
        name: `Alice`,
        occupation: `Writer`,
        startingPrice: 30
    },
    {
        name: `Bob`,
        occupation: `Teacher`,
        startingPrice: 50
    },
    {
        name: `Carol`,
        occupation: `Program`,
        startingPrice: 70
    }
];

for(let i=0; i < freelancers.length; i++){
    console.log(freelancers[i])
}

const names = ['Jairus', 'Dan', 'Tucker', 'Robert', 'Eve', `Henry`];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', `Chef`];
const minStartingPrice = 20;
const maxStartingPrice = 100;


function randomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * (maxStartingPrice - minStartingPrice + 1)) + minStartingPrice;

    const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice
    };

    freelancers.push(newFreelancer);
    console.log('New Freelancer added:', newFreelancer);

    render();
}

function addFreelancer() {
    const randomIndex = Math.floor(Math.random() * freelancers.length);
    const newFreelancer = {
        name: freelancers[randomIndex].name,
        occupation: freelancers[randomIndex].occupation,
        startingPrice: freelancers[randomIndex].startingPrice
};

    freelancers.push(newFreelancer);
    console.log (`New Freelancer added:`, newFreelancer);
    
    render();
}

const table = document.createElement("table");
table.className = "table";
root.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr = document.createElement("tr");
thead.appendChild(tr);

const thName = document.createElement("th");
thName.innerHTML = "Name";
tr.appendChild(thName);

const thCity = document.createElement("th");
thCity.innerHTML = "Occupation";
tr.appendChild(thCity);

const thSport = document.createElement("th");
thSport.innerHTML = "Starting Price";
tr.appendChild(thSport);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const display = () => {
    arrSports.forEach((element) => {
      const trBody = document.createElement("tr");
      tbody.appendChild(trBody);
  
      const tdName = document.createElement("td");
      tdName.innerHTML = element.team;
      trBody.appendChild(tdName);
  
      const tdCity = document.createElement("td");
      tdCity.innerHTML = element.city;
      trBody.appendChild(tdCity);
  
      const tdSport = document.createElement("td");
      tdSport.innerHTML = element.sport;
      trBody.appendChild(tdSport);
    });
  };

function averageHourlyRate(freelancers) {
    if (freelancers.length === 0) {
    return 0;
    }

    const totalHourlyRate = freelancers.reduce((sum,freelancer) => {
    return sum + freelancer.startingPrice;
}, 0);

    const averageHourlyRate = totalHourlyRate / freelancers.length;
    return averageHourlyRate;
}

const averagePrice = averageHourlyRate(freelancers);
console.log(`Average hourly rate`, averagePrice);

function render() {
    const table = document.createElement(`table`);
    const root = document.getElementById(`root`);
    const aSP = document.createElement(`aSP`)
    root.appendChild(table);
}

const freelancerIntervalId = setInterval(addFreelancer, 10000);

function myStopFunction() {
    clearInterval(freelancerIntervalId);
}

const randomFreelancerIntervalId = setInterval(randomFreelancer,3000);

render();