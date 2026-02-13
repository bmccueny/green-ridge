export interface Service {
  name: string;
  description: string;
  image?: string;
}

export interface ServiceCategory {
  category: string;
  tagline: string;
  items: Service[];
}

export const serviceData: ServiceCategory[] = [
  {
    category: "Lawn Care",
    tagline: "Keep your lawn lush, green, and healthy all season long.",
    items: [
      { name: "Weekly Mowing", description: "Regular mowing, edging, and blowing for a manicured look every week", image: "/images/lawn-1.jpg" },
      { name: "Fertilization & Weed Control", description: "Seasonal fertilizer applications and targeted weed treatment programs", image: "/images/lawn-2.jpg" },
      { name: "Aeration & Overseeding", description: "Core aeration to reduce compaction and overseeding for a thick, healthy lawn" },
      { name: "Lawn Renovation", description: "Complete lawn restoration including grading, soil amendment, and new seed or sod" },
    ],
  },
  {
    category: "Garden Design",
    tagline: "Custom planting plans that bring color and life to your property.",
    items: [
      { name: "Planting Design", description: "Custom garden layouts with native perennials, shrubs, and ornamental grasses", image: "/images/garden-1.jpg" },
      { name: "Raised Bed Installation", description: "Built-to-order raised beds for vegetables, herbs, or ornamental plantings", image: "/images/garden-2.jpg" },
      { name: "Pollinator Gardens", description: "Habitat-friendly gardens designed to attract butterflies, bees, and hummingbirds" },
      { name: "Seasonal Color", description: "Rotating annual flower displays for spring, summer, and fall beauty" },
    ],
  },
  {
    category: "Hardscaping",
    tagline: "Patios, walkways, and walls built to last a lifetime.",
    items: [
      { name: "Patio Installation", description: "Natural stone, bluestone, or paver patios designed for outdoor living", image: "/images/hardscape-1.jpg" },
      { name: "Walkways & Paths", description: "Functional and beautiful stone or brick paths connecting your outdoor spaces", image: "/images/hardscape-2.jpg" },
      { name: "Retaining Walls", description: "Structural and decorative walls for slopes, terraces, and garden borders" },
      { name: "Outdoor Kitchens & Fire Pits", description: "Custom-built features for year-round outdoor entertaining" },
    ],
  },
  {
    category: "Tree & Shrub Care",
    tagline: "Healthy trees and shrubs are the backbone of any great landscape.",
    items: [
      { name: "Tree Pruning", description: "Expert structural pruning for health, safety, and aesthetics", image: "/images/tree-1.jpg" },
      { name: "Shrub Trimming", description: "Detailed hedge and shrub shaping to keep your property looking sharp", image: "/images/tree-2.jpg" },
      { name: "Tree & Stump Removal", description: "Safe removal of dead, damaged, or unwanted trees and grinding of stumps" },
      { name: "Plant Health Care", description: "Disease diagnosis, pest management, and deep root fertilization" },
    ],
  },
  {
    category: "Seasonal Services",
    tagline: "Year-round property maintenance so your landscape always looks its best.",
    items: [
      { name: "Spring Cleanup", description: "Debris removal, bed edging, mulching, and pruning to kick off the season", image: "/images/seasonal-1.jpg" },
      { name: "Fall Cleanup", description: "Leaf removal, garden bed winterization, and final lawn treatments", image: "/images/seasonal-2.jpg" },
      { name: "Mulch & Topsoil", description: "Premium mulch installation and topsoil delivery for beds and gardens" },
      { name: "Snow Plowing", description: "Reliable residential and commercial snow removal when winter hits" },
    ],
  },
  {
    category: "Irrigation",
    tagline: "Smart watering systems that save time, water, and money.",
    items: [
      { name: "Sprinkler System Design", description: "Custom irrigation layouts engineered for even coverage and water efficiency", image: "/images/irrigation-1.jpg" },
      { name: "Installation & Retrofits", description: "New system installation or upgrades to existing sprinkler systems", image: "/images/irrigation-2.jpg" },
      { name: "Seasonal Start-Up & Winterization", description: "Spring activation and fall blowouts to protect your system year-round" },
      { name: "Repairs & Troubleshooting", description: "Fast diagnosis and repair of broken heads, leaks, and controller issues" },
    ],
  },
];

export const featuredServices: Service[] = [
  { name: "Lawn Care", description: "Weekly mowing, fertilization, and year-round lawn health programs", image: "/images/lawn-1.jpg" },
  { name: "Garden Design", description: "Custom planting plans with native perennials, shrubs, and seasonal color", image: "/images/garden-1.jpg" },
  { name: "Hardscaping", description: "Patios, walkways, retaining walls, and outdoor living features", image: "/images/hardscape-1.jpg" },
  { name: "Tree Service", description: "Expert pruning, removal, and plant health care for trees and shrubs", image: "/images/tree-1.jpg" },
  { name: "Seasonal Cleanup", description: "Spring and fall cleanups, mulching, and year-round property maintenance", image: "/images/seasonal-1.jpg" },
  { name: "Irrigation", description: "Sprinkler system design, installation, repairs, and winterization", image: "/images/irrigation-1.jpg" },
];
