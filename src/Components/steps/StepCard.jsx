const StepCard = ({ description, icon: Icon, number, title }) => {
  return (
    <div className="relative rounded-lg border border-gray-100 bg-white px-8 py-9 text-center shadow-sm">
      <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#7c3aed] text-xs font-bold text-white">
        {number}
      </span>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f0e7ff] text-[#7c3aed]">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mt-6 text-lg font-extrabold text-[#101727]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#627382]">{description}</p>
    </div>
  );
};

export default StepCard;
