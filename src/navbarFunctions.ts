const $weather = document.getElementById("current-weather") as HTMLElement;

export function updateNavbarDate(): void {
  const $dataNavBar = document.getElementById("current-date") as HTMLElement;
  const today = new Date();
  const formattedDateTime = today.toLocaleString("es-ES");
  $dataNavBar.textContent = formattedDateTime;
}

export async function addWeather() {
  
  const apiKey = "c4cd65ce2838446fa43100831241012"; 
  const city = "Barcelona"; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    console.log("Response", response);

    if (!response.ok) {
      throw new Error(`Error ${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    console.log("Result", result);
    console.log(result.current.condition.text);

    const temperature: number = result.current.temp_c; 
    const description: string = result.current.condition.text; 
    const cityName: string = result.location.name;
    const icon: string = result.current.condition.icon;

    $weather.innerHTML = 
      `Weather: ${description}<br>
      Temperature: ${temperature}°C<br>
      City: ${cityName}`;

      addIcon(icon);

    } catch (error: any) {
      $weather.innerHTML = `Error: ${error.message || 'Unable to fetch weather data'}`;
    }
  
}

//EX 6 - weather icon

function addIcon(icon: string) {
  const $icon = document.createElement("img");
  $icon.src = icon;
  $icon.classList.add("icon-weather");
  $weather.appendChild($icon);
}
