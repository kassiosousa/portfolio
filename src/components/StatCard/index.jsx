const StatCard = ({ value, label }) => (
  <div className="bg-[#2A2A2A] p-4 rounded-md shadow text-white">
    <div className="text-3xl font-bold text-[#00C2FF]">{value}</div>
    <div className="text-sm text-[#A0A0A0]">{label}</div>
  </div>
);

export default StatCard;
