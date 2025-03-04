import WeekendDiscountCard from "./WeekendDiscountCard";

const weekenddiscounts = [
    {
      id: 1,
      title: "Natural Eggs",
      subTitle:"Weekend Discount 40%",
      description: "Eat one every day ",
      discount: 40,
      image: "/placeholder.svg?height=230&width=420",
      link: "/shop-now",
    },
    {
      id: 2,
      title: "Taste the Best",
      subTitle:"Weekend Discount",
      description: "Shine the morning",
      discount: 40,
      image: "/placeholder.svg?height=230&width=420",
      link: "/shop-now",
    },
    {
        id: 3,
        title: "Ditch the Junk",
        subTitle:"Weekend Discount",
        description: "Breakfast made better",
        discount: 40,
        image: "/placeholder.svg?height=230&width=420",
        link: "/shop-now",
      },
  ];
  

const WeekendDiscountCardSection = () => {
    return (
        <div>
            <WeekendDiscountCard weekenddiscounts={weekenddiscounts} />
        </div>
    );
};

export default WeekendDiscountCardSection;