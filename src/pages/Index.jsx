import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">UFO Sightings in the USA</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover the latest UFO sightings and interesting statistics.
        </p>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sightings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <strong>Date:</strong> 2023-10-01 <br />
                <strong>Location:</strong> Roswell, NM <br />
                <strong>Description:</strong> Bright light moving erratically
                in the sky.
              </li>
              <li>
                <strong>Date:</strong> 2023-09-25 <br />
                <strong>Location:</strong> Area 51, NV <br />
                <strong>Description:</strong> Unidentified flying object with
                unusual shape.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <strong>Total Sightings:</strong> 1,234
              </li>
              <li>
                <strong>Most Common Location:</strong> Roswell, NM
              </li>
              <li>
                <strong>Most Active Month:</strong> July
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-8">
        <p className="text-muted-foreground">
          &copy; 2023 UFO Sightings USA. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;