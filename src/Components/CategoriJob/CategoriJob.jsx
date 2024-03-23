const CategoriJob = ({ job }) => {
  const { id, logo, category_name, availability } = job;
  return (
    <div className="bg-[#f9f8ff] px-5 py-12 space-y-3 rounded-lg">
      <div className="bg-[#eceafc] p-2 inline-block rounded-md">
        <img src={logo} alt="" />
      </div>
      <h3 className="text-lg font-bold">{category_name}</h3>
      <p className="font-medium text-xs">{availability}</p>
    </div>
  );
};

export default CategoriJob;
