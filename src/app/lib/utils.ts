function getColorByString(input: string): string {
  switch (input.toLowerCase()) {
    case "tech":
      return "#08a8f0";
    case "gadget":
      return "#ff4400";
    case "vurduruyorum":
      return "#ff4400";
    case "laptop":
      return "purple";
    default:
      return "orange";
  }
}

export { getColorByString };
