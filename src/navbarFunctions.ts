export function updateNavbarDate(): void {
    const $dataNavBar = document.getElementById("current-date") as HTMLButtonElement;
    const today = new Date();
    const formattedDateTime = today.toLocaleString("es-ES");
    $dataNavBar.textContent = formattedDateTime;
  }
  