import { useState } from 'react';

const settimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

const piano = {
  "Lunedì": {
    Colazione: "Crêpes di grano saraceno con marmellata di prugne + tè verde",
    Spuntino: "Noci + albicocca secca",
    Pranzo: "Quinoa con lenticchie, carote, scarola",
    Cena: "Zuppa di verdure + uova strapazzate con cicoria"
  },
  "Martedì": {
    Colazione: "Yogurt di soia + fiocchi di miglio + mirtilli",
    Spuntino: "Mandorle + succo di carota",
    Pranzo: "Riso integrale con tofu e verdure",
    Cena: "Sgombro al vapore + spinaci + patate"
  }
};

const spesa = {
  "Cereali e Pseudocereali": ["Quinoa", "Miglio", "Grano saraceno"],
  "Verdure": ["Carote", "Zucchine", "Scarola", "Cicoria"],
  "Frutta secca e Semi": ["Noci", "Mandorle", "Semi di zucca"]
};

const ricette = [
  {
    nome: "Crêpes di grano saraceno",
    ingredienti: "Farina di grano saraceno, acqua, sale",
    preparazione: "Mescola, versa in padella, cuoci entrambi i lati"
  },
  {
    nome: "Quinoa con lenticchie",
    ingredienti: "Quinoa, lenticchie rosse, verdure, olio EVO",
    preparazione: "Cuoci separatamente, unisci in padella"
  }
];

export default function App() {
  const [giorno, setGiorno] = useState("Lunedì");
  const [spesaCheck, setSpesaCheck] = useState({});

  const toggleCheck = (cat, item) => {
    const key = `${cat}-${item}`;
    setSpesaCheck(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Piano Alimentare - Mozzi A+</h1>

      <div style={{ marginBottom: 10 }}>
        {settimana.map(d => (
          <button key={d} onClick={() => setGiorno(d)} style={{ marginRight: 5 }}>
            {d}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2>{giorno}</h2>
        {Object.entries(piano[giorno] || {}).map(([pasto, descrizione]) => (
          <div key={pasto}>
            <strong>{pasto}</strong>: {descrizione}
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2>Lista della Spesa</h2>
        {Object.entries(spesa).map(([categoria, items]) => (
          <div key={categoria}>
            <h3>{categoria}</h3>
            {items.map(item => {
              const key = `${categoria}-${item}`;
              return (
                <div key={key}>
                  <input type="checkbox" checked={!!spesaCheck[key]} onChange={() => toggleCheck(categoria, item)} />
                  <label>{item}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div>
        <h2>Ricette</h2>
        {ricette.map(r => (
          <div key={r.nome}>
            <strong>{r.nome}</strong><br />
            🍴 {r.ingredienti}<br />
            👨‍🍳 {r.preparazione}<br /><br />
          </div>
        ))}
      </div>
    </div>
  );
}
