function regnUt() {
    const epsilon = parseFloat(document.getElementById('epsilon').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const P = parseFloat(document.getElementById('P').value);

    const advarselDiv = document.getElementById('advarsel');

    // Pusevarsel
    if (P === 5) {
      advarselDiv.style.display = 'flex';
      return;
    } else {
      advarselDiv.style.display = 'none';
    }

    if (isNaN(epsilon) || isNaN(b) || isNaN(c) || isNaN(P) || epsilon < 0 || b <= 0 || c <= 0 || P <= 0 || P > 5) {
      document.getElementById('resultat').textContent = '';
      return;
    }

    // Formel: ε × b × (1 + 0.1 × c) × (1 + (5 - P) / 10)
    let A = epsilon * b * (1 + 1.1 * c) * (1 + (5 - P) / 10);
    let pils = A / 100; // Skalere ned for å holde seg i realistisk skala
    pils = Math.min(pils, 25);

    const prisPerPils = 33;
    const totalKostnad = pils * prisPerPils;

    let melding = `Antall pils: ${pils.toFixed(2)}<br>Total kostnad: ${totalKostnad.toFixed(2)} kr`;

    if (totalKostnad > epsilon) {
      const lån = totalKostnad - epsilon;
      const lånegiver = lån >= 200 ? "Jostein" : "Oliver";
      melding += `<br><br>Du må ta opp lån på ${lån.toFixed(2)} kr hos ${lånegiver}`;
    }

    document.getElementById('resultat').innerHTML = melding;
  }