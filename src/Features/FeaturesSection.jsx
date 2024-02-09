import TabsContainer from "./TabsContainer";

function FeaturesSection() {
  return (
    <>
      <section id="features">
        {/* Heading  */}

        <div className="container mx-auto px-6 pt-16">
          <h1 className="mb-6 text-center text-4xl font-semibold">Features</h1>
          <p className="mx-auto max-w-md text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      <TabsContainer />
    </>
  );
}

export default FeaturesSection;
