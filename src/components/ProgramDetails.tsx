import { TripDay } from "../data/tripData";

interface Props {
  day: TripDay;
}

const categoryColors: Record<string, string> = {
  temple: "bg-yellow-100",
  culture: "bg-purple-100",
  food: "bg-red-100",
  activities: "bg-blue-100",
  shopping: "bg-pink-100",
  nature: "bg-green-100",
};

const categories = {
  temple: { label: "Temple", color: "bg-yellow-100" },
  culture: { label: "Culture jap", color: "bg-purple-100" },
  food: { label: "Nourriture", color: "bg-red-100" },
  activities: { label: "Activités", color: "bg-blue-100" },
  shopping: { label: "Shopping", color: "bg-pink-100" },
  nature: { label: "Nature", color: "bg-green-100" },
};



export default function ProgramDetails({ day }: Props) {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold text-center">
        {day.title} – {day.date}
      </h2>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {Object.entries(categories).map(([key, { label, color }]) => (
          <div key={key} className="flex items-center gap-2 text-sm">
            <span className={`w-4 h-4 rounded-full ${color}`} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {day.points.map((point, index) => {
          const content = (
            <div
              key={index}
              className={`rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-4 ${categoryColors[point.category] || "bg-white"}`}
            >
              {point.image && (
                <img
                  src={point.image}
                  alt={point.name}
                  className="w-full sm:w-40 h-40 object-cover rounded-md"
                />
              )}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{point.name}</h3>
                {point.description && (
                  <p className="text-sm text-gray-700">{point.description}</p>
                )}
                {point.address && (
                  <p className="text-sm text-gray-400 italic">{point.address}</p>
                )}
              </div>
            </div>
          );

          return point.link ? (
            <a
              key={index}
              href={point.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
