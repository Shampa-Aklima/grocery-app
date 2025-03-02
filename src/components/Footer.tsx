import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const categories = [
  {
    title: "FRUIT & VEGETABLES",
    items: [
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Fresh Fruits",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Packaged Produce",
      "Party Trays",
    ],
  },
  {
    title: "BREAKFAST & DAIRY",
    items: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
  {
    title: "MEAT & SEAFOOD",
    items: [
      "Breakfast Sausage",
      "Dinner Sausage",
      "Beef",
      "Chicken",
      "Sliced Deli Meat",
      "Shrimp",
      "Wild Caught Fillets",
      "Crab and Shellfish",
    ],
  },
  {
    title: "BEVERAGES",
    items: [
      "Water",
      "Sparkling Water",
      "Soda & Pop",
      "Coffee",
      "Milk & Plant-Based Milk",
      "Tea & Kombucha",
      "Drink Boxes & Pouches",
      "Craft Beer",
      "Wine",
    ],
  },
];

const Footer=()=> {
  return (
    <footer className="bg-gray-50 p-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-sm mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=" flex justify-between px-4 border-b-2 border-gray-200">
          <div className=" w-1/2 flex flex-col md:flex-row justify-between items-center py-4 border-b">
            <div className=" flex items-center gap-2 mb-4 md:mb-0">
              <Phone className="h-5 w-5 text-[#35AFA0]" />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">8 800 555-55</h3>
                <p className="text-sm text-muted-foreground">
                  Working 8:00 - 22:00
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex items-center gap-4">
            <div>
              <span className="text-sm text-muted-foreground">
                Download App on Mobile :
              </span>
              <p className="text-sm text-muted-foreground">
                15% discount on your first purchase
              </p>
            </div>

            <div className="flex gap-2">
              <Link href="https://play.google.com" target="_blank">
                <Image
                  src="/foot-img1.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <Link href="https://apps.apple.com" target="_blank">
                <Image
                  src="/foot-img2.png"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="flex gap-2">
              <Link href="https://play.google.com" target="_blank">
               
              </Link>
              </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm">
          <div className="flex ">
            <p className="text-muted-foreground mb-4 md:mb-0">
              Copyright 2025 © All rights reserved by Blackrise Theme
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/cookie"
                className="text-muted-foreground hover:text-foreground"
              >
                Cookie
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/foot-img3.png"
                alt="Visa"
                width={200}
                height={25}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;