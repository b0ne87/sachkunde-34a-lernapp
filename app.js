// Einfaches Quiz für §34a Lernapp

// Fragen-Array
const fragen = [
  {
    frage: "Was schützt Art. 1 GG?",
    antworten: ["Menschenwürde", "Meinungsfreiheit", "Eigentum", "Religionsfreiheit"],
    richtig: 0
  },
  {
    frage: "Wann ist Notwehr erlaubt?",
    antworten: ["Immer", "Nur bei Angriff", "Nie", "Nur bei Polizei"],
    richtig: 1
  },
  {
    frage: "Welche Pflichten hat ein Sicherheitsmitarbeiter bei Brand?",
    antworten: ["Alarmieren", "Nur beobachten", "Wegrennen", "Feuer löschen alleine"],
    richtig: 0
  }
];

// Aktueller Index
let aktuellerIndex = 0;

// DOM-Elemente
const frageEl = document.getElementById("frage");
const antwortenEl = document.getElementById("antworten");
const ergebnisEl = document.getElementById("ergebnis");

// Funktion, um Frage anzuzeigen
function zeigeFrage() {
  const aktuelleFrage = fragen[aktuellerIndex];
  frageEl.textContent = aktuelleFrage.frage;
  antwortenEl.innerHTML = "";

  aktuelleFrage.antworten.forEach((antwort, index) => {
    const btn = document.createElement("button");
    btn.textContent = antwort;
    btn.onclick = () => pruefeAntwort(index);
    antwortenEl.appendChild(btn);
  });

  ergebnisEl.textContent = "";
}

// Antwort prüfen
function pruefeAntwort(index) {
  if (index === fragen[aktuellerIndex].richtig) {
    ergebnisEl.textContent = "✅ Richtig!";
    ergebnisEl.style.color = "green";
  } else {
    ergebnisEl.textContent = "❌ Falsch!";
    ergebnisEl.style.color = "red";
  }
}

// Nächste Frage
function naechsteFrage() {
  aktuellerIndex++;
  if (aktuellerIndex >= fragen.length) {
    ergebnisEl.textContent = "🎉 Du hast alle Fragen gesehen!";
    frageEl.textContent = "";
    antwortenEl.innerHTML = "";
  } else {
    zeigeFrage();
  }
}

// Erste Frage anzeigen
zeigeFrage();
