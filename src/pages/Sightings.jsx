import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Sightings = () => {
  const [search, setSearch] = useState("");

  const sightings = [
    { date: "2023-10-01", location: "Roswell, NM", description: "Bright light moving erratically in the sky." },
    { date: "2023-09-25", location: "Area 51, NV", description: "Unidentified flying object with unusual shape." },
    // Add more sightings here
  ];

  const filteredSightings = sightings.filter(
    (sighting) =>
      sighting.date.includes(search) || sighting.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">All UFO Sightings</h1>
      </header>

      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Search by date or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />
      </div>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Sightings List</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {filteredSightings.map((sighting, index) => (
                <li key={index}>
                  <strong>Date:</strong> {sighting.date} <br />
                  <strong>Location:</strong> {sighting.location} <br />
                  <strong>Description:</strong> {sighting.description}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Sightings;