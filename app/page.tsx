import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Script src="https://strava-embeds.com/embed.js" strategy="lazyOnload" />
      
      <main className="w-full">
        
        {/* HERO SECTION */}
        <section className="w-full bg-gradient-to-b from-blue-600 to-blue-500 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">Hallwiler Triathlon</h1>
            <p className="text-xl mb-2">Hallwillersee</p>
            <p className="text-2xl font-semibold">9. Mai 2026</p>
          </div>
        </section>

        {/* INFOS SECTION */}
        <section className="w-full py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Das Event</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Willkommen beim Hallwiler Triathlon! Ein kleines, aber spannendes Event für Triathleten aller Leistungsstufen am schönen Hallwillersee.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl font-bold text-blue-600 mb-3">🏊</div>
                <h3 className="text-2xl font-bold mb-2">Schwimmen</h3>
                <p className="text-lg font-semibold text-gray-700">750 m</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl font-bold text-green-600 mb-3">🚴</div>
                <h3 className="text-2xl font-bold mb-2">Radfahren</h3>
                <p className="text-lg font-semibold text-gray-700">45 km</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl font-bold text-red-600 mb-3">🏃</div>
                <h3 className="text-2xl font-bold mb-2">Laufen</h3>
                <p className="text-lg font-semibold text-gray-700">8 km</p>
              </div>
            </div>
          </div>
        </section>

        {/* TREFFPUNKT SECTION */}
        <section className="w-full py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Treffpunkt & Wichtige Infos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">📍 Treffpunkt</h3>
                <p className="text-lg text-gray-700 mb-2">
                  <span className="font-semibold">Seebadi Beinwil am See</span>
                </p>
                <p className="text-base text-gray-600">
                  Wir treffen uns bei der Seebadi in Beinwil am See.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">🕐 Treffzeit</h3>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">12:00 Uhr</span>
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">🌊 Wassertemperatur</h3>
                <p className="text-lg text-gray-700 mb-2">
                  <span className="font-semibold">ca. 14°C</span>
                </p>
                <p className="text-base text-gray-600">
                  Neoprenanzug empfohlen!
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">💡 Tipp</h3>
                <p className="text-base text-gray-600">
                  Bringt einen Neoprenanzug mit – die Wassertemperatur ist frisch! <br />
                  Nimmt euch genügend Nahrung und Getränke mit, damit ihr während des Events gut versorgt seid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROUTEN SECTION */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Die Routen</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">🏊 Schwimmstrecke</h3>
                <div className="flex justify-center">
                  <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id="18002176328" data-style="standard" data-from-embed="false"></div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">🚴 Radfahr­strecke</h3>
                <div className="flex justify-center">
                  <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id="18002176404" data-style="standard" data-from-embed="false"></div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">🏃 Laufstrecke</h3>
                <div className="flex justify-center">
                  <div className="strava-embed-placeholder" data-embed-type="activity" data-embed-id="18002176468" data-style="standard" data-from-embed="false"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD SECTION */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">GPX Dateien zum Download</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Lade die Strecken-Dateien herunter und importiere sie in deine Trainings-App!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🚴</div>
                <h3 className="text-2xl font-bold mb-4">Radfahr­strecke</h3>
                <p className="text-gray-600 mb-6">45 km Hallwillersee</p>
                <a
                  href="/bike-route.gpx"
                  download="hallwiler-triathlon-bike.gpx"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  ⬇️ GPX Download
                </a>
              </div>
              <div className="bg-red-50 p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🏃</div>
                <h3 className="text-2xl font-bold mb-4">Laufstrecke</h3>
                <p className="text-gray-600 mb-6">8 km Hallwillersee</p>
                <a
                  href="/afternoon-run.gpx"
                  download="hallwiler-triathlon-run.gpx"
                  className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  ⬇️ GPX Download
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HELPERS SECTION */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Helfer gesucht!</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
              Wir brauchen euch! Der Event lebt von fleissigen Helfern bei Station, Verpflegung und Organisation.
            </p>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
              Zur Belohnung gibt es natürlich auch Bier für unsere Helfer – und gute Laune sowieso! Meldet euch an und seid Teil des Teams.
            </p>
          </div>
        </section>

        {/* DISCLAIMER SECTION */}
        <section className="w-full py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Haftungsausschluss / Disclaimer</h2>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700">
              <p className="text-base leading-relaxed">
                Die Teilnahme an diesem Triathlon erfolgt auf eigene Verantwortung. Es handelt sich um einen nicht offiziellen Hobby- bzw. Trainingswettkampf und nicht um eine behördlich genehmigte oder organisierte Veranstaltung.
              </p>
              <p className="text-base leading-relaxed">
                Alle Teilnehmenden sind verpflichtet, insbesondere während der Radstrecke die geltenden Verkehrsregeln einzuhalten. Es findet keine Streckensperrung statt.
              </p>
              <p className="text-base leading-relaxed">
                Der Schwimmteil findet in einem öffentlichen Gewässer statt, in dem sich auch Boote und andere Wasserteilnehmende befinden können. Es besteht keine Absicherung durch Rettungskräfte. Teilnehmende dürfen sich nur ins Wasser begeben, wenn sie sicher schwimmen können und sich den Bedingungen gewachsen fühlen.
              </p>
              <p className="text-base leading-relaxed">
                Jede Person ist selbst dafür verantwortlich, ihre körperliche Gesundheit, Ausrüstung und Sicherheit angemessen einzuschätzen. Die Teilnahme erfolgt auf eigenes Risiko.
              </p>
              <p className="text-base leading-relaxed font-semibold">
                Die Organisatoren sowie alle beteiligten Personen übernehmen keine Haftung für Unfälle, Verletzungen, Schäden oder Verluste jeglicher Art. Jegliche Haftungsansprüche werden, soweit gesetzlich zulässig, ausgeschlossen.
              </p>
            </div>
          </div>
        </section>

        {/* REGISTRATION SECTION */}
        <section className="w-full py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Anmeldung</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Melde dich jetzt an! Wir freuen uns auf deine Teilnahme als Triathlonkämpfer oder Helfer.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://forms.gle/cdLHVrtsLZLXicoz9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
              >
                Jetzt anmelden →
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-8">
              Du hast Fragen? Kontaktiere uns per Email oder schau auf unserer Website vorbei.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full bg-gray-900 text-gray-300 py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm">Hallwiler Triathlon 2026 | Hallwillersee</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
