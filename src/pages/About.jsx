import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to provide accurate and up-to-date information about UFO sightings in the USA. We aim to be the go-to resource for enthusiasts and researchers alike.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions or would like to report a sighting, please contact us at <a href="mailto:info@ufosightingsusa.com" className="text-blue-500">info@ufosightingsusa.com</a>.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;