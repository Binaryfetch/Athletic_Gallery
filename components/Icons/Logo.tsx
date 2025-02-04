export default function Logo() {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* SVG Image */}
      <img src="/torch.svg" alt="Athletic Meet Logo" className="w-28 h-28" />

      {/* Text Below the SVG */}
      <span className="text-3xl font-bold text-orange-500">GNDEC <br></br>ATHLETIC MEET</span>
    </div>
  );
}
