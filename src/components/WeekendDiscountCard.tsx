import Link from "next/link";

interface WeekendDiscounts {
  id: number; // Ensure this field exists in your data
  title: string;
  subTitle: string;
  discount?: number;
  description: string;
  link: string;
}

interface WeekendDiscountProps {
  weekenddiscounts: WeekendDiscounts[];
}

const WeekendDiscountCard: React.FC<WeekendDiscountProps> = ({ weekenddiscounts }) => {
  return (
    <div>
      {weekenddiscounts.map((weekendDiscount) => (
        <div
          key={weekendDiscount.id}
          className="bg-[#C4C4C4] p-8 rounded-lg flex flex-col justify-start items-start w-[370px] h-[218px]"
        >
          <h4 className="text-xl font-semibold mb-2 text-[#3E445A]">
            {weekendDiscount.subTitle}
          </h4>
          <h3 className="text-xl font-semibold mb-2 text-[#3E445A]">
            {weekendDiscount.title}
          </h3>
          <p className="text-sm text-[#9B9BB4] mb-2">{weekendDiscount.description}</p>
          <Link href={weekendDiscount.link} className="text-[#40B8AE] font-medium">
            Shop Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WeekendDiscountCard;
