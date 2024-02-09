import TabItem from "./TabItem";

function FaqSection() {
  return (
    <section id="faq">
      {/* heading */}
      <div className="container mx-auto">
        <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto max-w-lg px-6 text-center text-grayishBlue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      {/* acordion  */}
      <div className="container mx-auto mb-32 px-6">
        <div className="m-8 mx-auto max-w-2xl overflow-hidden">
          {/* Tab 1  */}
          <TabItem title="What is Bookmark?" />
          <TabItem title="How can I request a new browser?" />
          <TabItem title="Is ther a mobile app?" />
          <TabItem title="What about other Chromium browsers?" />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
