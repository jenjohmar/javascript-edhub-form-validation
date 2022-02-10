// 1. Sla de referentie naar het gebruikersnaam-veld op
const usernameInput = document.getElementById('username-input');
// 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
const usernameErrorMessage = document.getElementById('username-error');

// 3. Zet een event listener op het gebruikersnaam-veld
usernameInput.addEventListener("keyup", handleInputUsername);

// 4. Maak een functie die de event listener kan aanroepen als de gebruiker input geeft
// 5. Laat die functie checken of de huidige waarde van de input een '@' bevat
function handleInputUsername(e) {
    if(e.target.value.includes("@")) {
        // 6. Als dit zo is, geef de waarschuwing weer
        usernameErrorMessage.innerText = "Gebruik geen @ in je username!";
    } else {
        // 7. Als dit niet zo is, zorg dan dat de waarschuwing verdwijnt
        usernameErrorMessage.innerText = ""
    }
}

// 8. Herhaal deze stappen voor het wachtwoord

const passwordInput = document.getElementById("password-input");
const passwordErrorMessage = document.getElementById("password-error");

passwordInput.addEventListener("keyup", handleInputPassword);

function handleInputPassword(e) {
    if (e.target.value.length > 0 && e.target.value.length < 6) {
        passwordErrorMessage.innerText = "Minimaal 6 tekens!";
    } else {
        passwordErrorMessage.innerText = "";
    }
}