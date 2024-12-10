export function updateNavbarDate(): void {
  const $dataNavBar = document.getElementById("current-date") as HTMLElement;
  const today = new Date();
  const formattedDateTime = today.toLocaleString("es-ES");
  $dataNavBar.textContent = formattedDateTime;
}

export async function addWeather() {
  const $weather = document.getElementById("current-weather") as HTMLElement;

  const apiKey = "c4cd65ce2838446fa43100831241012"; // Tu API Key
  const city = "Barcelona"; // Ciudad para la cual quieres el clima
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    console.log("Response", response);

    // Comprobar si la respuesta es exitosa
    if (!response.ok) {
      // Si la respuesta no es exitosa (código de estado 2xx), lanzamos un error.
      throw new Error(`Error ${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    console.log("Result", result);

    const temperature = result.current.temp_c; // Temperatura en Celsius
    const description = result.current.condition.text; // Descripción del clima
    const cityName = result.location.name;

    $weather.innerHTML = 
      `Weather: ${description}<br>
      Temperature: ${temperature}°C<br>
      City: ${cityName}`;

    } catch (error: any) {
      $weather.innerHTML = `Error: ${error.message || 'Unable to fetch weather data'}`;
    }
}

