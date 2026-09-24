import PortfolioContent from "./PortfolioContent";

export const metadata = {
  title: "Our Work",
  description:
    "House construction and interior projects by Chandu Homely Interiors — halls, kitchens and bedrooms across Telangana & Andhra Pradesh.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return <PortfolioContent />;
}
