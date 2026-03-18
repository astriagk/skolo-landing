import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Tabs from "@/components/ui/Tabs";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import {
  parentFeatures,
  schoolFeatures,
  driverFeatures,
  type Feature,
} from "@/data/features";

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
      {features.map((feature, i) => (
        <AnimateOnScroll key={i}>
          <Card>
            <span className="text-2xl mb-3 block">{feature.icon}</span>
            <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export default function Features() {
  const tabs = [
    {
      id: "parents",
      label: "For Parents",
      icon: "👥",
      content: <FeatureGrid features={parentFeatures} />,
    },
    {
      id: "schools",
      label: "For Schools",
      icon: "🏫",
      content: <FeatureGrid features={schoolFeatures} />,
    },
    {
      id: "drivers",
      label: "For Drivers",
      icon: "🚌",
      content: <FeatureGrid features={driverFeatures} />,
    },
  ];

  return (
    <SectionWrapper id="features" className="bg-gray-50">
      <div className="text-center mb-12">
        <AnimateOnScroll>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-2">
            Features
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything You Need, In One App
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re a parent, school, or driver — Skolo has the
            tools to make school commutes safe and efficient.
          </p>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll>
        <Tabs tabs={tabs} />
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
