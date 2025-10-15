const API_URL = "http://127.0.0.1:8000/hostels";

async function fetchHostels() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const list = document.getElementById("hostelList");
  list.innerHTML = "";

  data.forEach(hostel => {
    const card = document.createElement("div");
    card.className = "hostel-card";
    card.innerHTML = `
      <h2>${hostel.name}</h2>
      <div class="images">
        <img src="http://127.0.0.1:8000/${hostel.image1}" alt="${hostel.name} image 1">
        <img src="http://127.0.0.1:8000/${hostel.image2}" alt="${hostel.name} image 2">
      </div>
      <p><strong>Owner Contact:</strong> ${hostel.contact}</p>
    `;
    list.appendChild(card);
  });
}

fetchHostels();
