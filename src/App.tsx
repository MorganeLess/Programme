import { useState } from "react";
import Map from "./components/Map";
import ProgramDetails from "./components/ProgramDetails";
import { tripData, TripDay } from "./data/tripData";

function App() {
  const [selectedDay, setSelectedDay] = useState<TripDay>(tripData[0]);

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="p-4">
        <label htmlFor="day-select" className="block text-lg font-semibold mb-2 text-center">
          Choisir un jour
        </label>
        <select
          id="day-select"
          onChange={(e) => {
            const day = tripData.find((d) => d.date === e.target.value);
            if (day) setSelectedDay(day);
          }}
          value={selectedDay.date}
          className="p-2 text-base border rounded w-full sm:w-80 mx-auto block"
        >
          {tripData.map((day) => (
            <option key={day.date} value={day.date}>
              {day.date} – {day.title}
            </option>
          ))}
        </select>
      </div>

      <Map selectedDay={selectedDay} />
      <ProgramDetails day={selectedDay} />
    </div>
  );
}

export default App;
