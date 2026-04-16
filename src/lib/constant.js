export const partsLookup = {
  media: "Overall photos and video",

  // Exterior section
  frontBumperBar: "Front Bumper Bar",
  bonnet: "Bonnet",
  frontQuarterPanels: "Front Quarter Panels",
  frontDoors: "Front Doors",
  rearDoors: "Rear Doors",
  rearQuarterPanels: "Rear Quarter Panels",
  roofPanel: "Roof Panels",
  sunroofOrConvertible: "Sunroof/Convertible",
  repairWork: "Any repair works detected?",

  // Interior section
  driverSeat: "Driver Seat",
  rearSeats: "Rear Seats",
  passengerSeat: "Passenger Seat",
  rearBoot: "Rear Boot",
  dashboard: "Dashboard",
  infotainmentSystem: "Infotainment System",
  steeringWheel: "Steering Wheel",
  airConditioning: "Air Conditioning",
  heater: "Heater",

  // Engine section
  engineOilCondition: "Engine oil condition/level",
  coolantCondition: "Coolant condition/level",
  brakeOilCondition: "Brake oil condition/level",
  steeringOilCondition: "Power steering oil condition/level",
  wiperFluidCondition: "Wiper fluid",
  starterMotor: "Starter motor",
  driveBelt: "Drive belt",
  alternator: "Alternator",
  radiator: "Radiator",
  engineMount: "Engine mount",
  injector: "Injectors",
  coils: "Coils",
  battery: "Battery",
  airFilter: "Air filter",
  tickingNoise: "Any ticking or knocking noise on engine?",
  blowBy: "Any engine blow-by detected?",
  misfire: "Any engine misfire detected?",
  leaks: "Any fluid leaks detected?",
  other: "Other",

  // Transmission section
  shiftQuality: "Shift Quality",
  gearSelector: "Gear Selector",
  vibration: "Any engine vibration noticed?",
  transmissionFluid: "Transmission Fluid",

  // Differential section
  differentialAndbushes: "Differential and Bushes",

  // Suspension section
  brakePadsFrontRight: "Brake Pads and Rotors (Front Right)",
  brakePadsFrontLeft: "Brake Pads and Rotors (Front Left)",
  brakePadsRearRight: "Brake Pads and Rotors (Rear Right)",
  brakePadsRearLeft: "Brake Pads and Rotors (Rear Left)",
  controlArmsFrontRight: "Control Arms (Front Right)",
  controlArmsFrontLeft: "Control Arms (Front Left)",
  controlArmsRearRight: "Control Arms (Rear Right)",
  controlArmsRearLeft: "Control Arms (Rear Left)",
  shockAbsorbersFrontRight: "Front Springs and Shock Absorbers (Front Right)",
  shockAbsorbersFrontLeft: "Front Springs and Shock Absorbers (Front Left)",
  shockAbsorbersRearRight: "Rear Springs and Shock Absorbers (Rear Right)",
  shockAbsorbersRearLeft: "Rear Springs and Shock Absorbers (Rear Left)",
  ballJoints: "Ball Joints",
  swayBars: "Sway Bars",
  struts: "Struts",

  // Wheel
  wheelFrontRight: "Wheel (Front Right)",
  wheelFrontLeft: "Wheel (Front Left)",
  wheelRearRight: "Wheel (Rear Right)",
  wheelRearLeft: "Wheel (Rear Left)",
  tyreFrontRight: "Tyre (Front Right)",
  tyreFrontLeft: "Tyre (Front Left)",
  tyreRearRight: "Tyre (Rear Right)",
  tyreRearLeft: "Tyre (Rear Left)",
  driveShaftFrontRight: "Drive shaft/CV Boots/Joints (Front Right)",
  driveShaftFrontLeft: "Drive shaft/CV Boots/Joints (Front Left)",
  driveShaftRearRight: "Drive shaft/CV Boots/Joints (Rear Right)",
  driveShaftRearLeft: "Drive shaft/CV Boots/Joints (Rear Left)",
  wheelBearingFrontRight: "Wheel Bearing (Front Right)",
  wheelBearingFrontLeft: "Wheel Bearing (Front Left)",
  wheelBearingRearRight: "Wheel Bearing (Rear Right)",
  wheelBearingRearLeft: "Wheel Bearing (Rear Left)",

  // Light section
  headlight: "Headlights",
  highBeam: "High beam/low beam",
  fogLights: "Fog Light",
  taillight: "Tail light",
  brakeLight: "Brake Light",
  numberPlateLights: "Number Plate",

  // Chassis section
  aPillar: "A-Pillar",
  bPillar: "B-Pillar",
  cPillar: "C-Pillar",
  rearChassisRails: "Rear Chassis Rails",
  frontChassisRails: "Front Chassis Rails",
  crossMembers: "Cross Members",
  underBodyAndChassis: "Underbody and Chassis",
  chassisRust: "Are there any rust on chassis?",

  // Exhaust section
  catalyticConverter: "Catalytic Converter",
  muffler: "Muffler/Silencer",
  exhaustPipes: "Exhaust Pipes",
  exhaustHangers: "Exhaust Hangers/Brackets",
  exhaustEmissions: "Exhaust Emissions",
  manifold: "Exhaust Manifold",

  // Test drive section
  engineStart: "Engine Start",
  idling: "Idle",
  clutch: "Clutch/Gearbox",
  transmission: "Transmission",
  turboPressure: "Turbo pressure and boost",
  handBrake: "Handbrake",
  wheelAlignment: "Wheel Alignment",
  brakeNoise: "Brake Noise",
  suspension: "Suspension",
  cruiseControl: "Cruise Control",
  adas: "Advance Driver Assistance System - ADAS",
  noise:
    "Are there any abnormal noise, knocking or vibration during test drive?",
};

export const optionalParts = [
  "rearDoors",
  "sunroofOrConvertible",
  "fogLights",
  "turboPressure",
  "cruiseControl",
  "adas",
];

export const presetParts = [
  "frontBumperBar",
  "bonnet",
  "frontQuarterPanels",
  "frontDoors",
  "rearDoors",
  "rearQuarterPanels",
  "roofPanel",
  "sunroofOrConvertible",
  "aPillar",
  "bPillar",
  "cPillar",
  "rearChassisRails",
  "frontChassisRails",
  "crossMembers",
];

export const lightParts = [
  "headlight",
  "highBeam",
  "fogLights",
  "taillight",
  "brakeLight",
  "numberPlateLights",
];

export const yesNoParts = [
  "repairWork",
  "tickingNoise",
  "blowBy",
  "misfire",
  "leaks",
  "vibration",
  "chassisRust",
  "noise",
];

export const paragraphParts = ["other"];



// Constants for caravan reports

export const caravanPresetParts = [
  "frontPanel",
  "rearPanel",
  "offSideWall",
  "nearSideWall",
  "roofPanel",
  "externalDoors",
  "hatachesAndLockers",
  "externalVents",
  "awnings",
  "accessories",
  "aFrame",
  "mainChassisRails",
  "crossMembers",
  "underFloor",
  "legsAndMounts",
  "underBodyProtection",
];

export const caravanLightParts = [
  "coupling",
  "mounts",
  "handBrake",
  "jockeyWheel",
  "breakWayUnit",
  "trailerPlug",
  "tailLight",
  "indicators",
  "sideMarker",
  "numberPlateLights",
];


export const caravanYesNoParts = [
  "serviceRecordsSupplied",
  "complianceCertificates",
  "ownerManuals",
  "spareKeys",
  "annexAwningWalls",
  "weightDistributionGear",
  "otherAccessories",
];


export const caravanPartsLookup = {
  media: "Overall photos and video",

  // Exterior section
  frontPanel: "Front Panel",
  rearPanel: "Rear Panel",
  offSideWall: "Offside Wall",
  nearSideWall: "Nearside Wall",
  roofPanel: "Roof Panel",
  externalDoors: "External Doors",
  hatachesAndLockers: "External Hatches and Lockers",
  externalVents: "Windows and External Vents",
  awnings: "Awnings and Arms",
  accessories: "External Accessories",

  // Chassis section
  aFrame: "A Frame / Drawbar",
  mainChassisRails: "Main Chassis Rails",
  crossMembers: "Crossmembers",
  underFloor: "Underfloor Structure (visible)",
  legsAndMounts: "Stabiliser Legs and Mounts",
  underBodyProtection: "Stone Guard / Underbody Protection",

  // Light section
  coupling: "Coupling / Hitch",
  mounts: "Safety Chains and Mounts",
  handBrake: "Handbrake / Parking Brake (van)",
  jockeyWheel: "Jockey Wheel and Clamp",
  breakWayUnit: "Breakaway Unit",
  trailerPlug: "Trailer Plug and Visible Wiring",
  tailLight: "Tail and Brake Lights",
  indicators: "Indicators and Hazard Lights",
  sideMarker: "Side Marker / Clearance Lights",
  numberPlateLights: "Number Plate Light",

  // Wheel section
  frontRightTyre: "Front Right Tyre",
  frontLeftTyre: "Front Left Tyre",
  rearRightTyre: "Rear Right Tyre",
  rearLeftTyre: "Rear Left Tyre",
  spareTyre: "Spare Tyre",
  wheelsAndRims: "Wheels and Rims",
  bearings: "Bearings",
  brakeAssemblies: "Brake Assemblies",

  // Interior section
  loungeSeat: "Lounge Seating",
  dinnet: "Dinette / Table",
  beds: "Beds and Mattresses",
  roofLining: "Roof Lining / Pop Top Vinyl",
  wallPanels: "Wall Panels and Cupboards",
  floorCondition: "Floor Condition",
  partitions: "Internal Doors and Partitions",
  windows: "Windows, Blinds and Flyscreens",
  kitchenStorage: "Kitchen Benchtops and Storage",
  sinkArea: "Sink and Mixer (Kitchen)",
  bathroom: "Bathroom / Toilet Fixtures",
  showerBase: "Shower Base and Screens",
  lighting: "Interior Lighting and Switches",
  roofVents: "Roof Vents and Fans",

  // Utility section
  houseBatteries: "House Batteries (12V Electrical)",
  wiringAndFuses12V: "12V Wiring and Fuses (12V Electrical)",
  chargerSolarControl: "Charger / Solar Regulator / Control Panel (12V Electrical)",
  inlet240V: "240V Inlet (240V Electrical)",
  internalPowerPoints: "Internal Power Points (240V Electrical)",
  rcdSafetySwitch: "RCD / Safety Switch Test Button (240V Electrical)",
  gasCylinders: "Gas Cylinders and Mountings (Gas)",
  gasRegulatorAndHoses: "Regulator and Visible Hoses (Gas)",
  freshWaterTanks: "Fresh Water Tanks and Mounts (Water and Waste)",
  waterPumpAndLines: "Pump Operation and Visible Lines (Water and Waste)",
  kitchenPlumbing: "Kitchen Plumbing (Water and Waste)",
  bathroomPlumbing: "Bathroom Plumbing (Water and Waste)",
  greyBlackWaterTanks: "Grey / Black Water Tanks and Connections (Water and Waste)",
  hotWaterSystem: "Hot Water System (Climate and Appliances)",
  fridge: "Fridge (Climate and Appliances)",
  airConditioner: "Air Conditioner (Climate and Appliances)",
  heater: "Heater (Climate and Appliances)",
  otherFixedAppliances: "Other Major Fixed Appliances (Climate and Appliances)",

  // Documentation section
  serviceRecordsSupplied: "Service Records Supplied",
  complianceCertificates: "Compliance / Gas Certificates Supplied (if any)",
  ownerManuals: "Owner Manuals",
  spareKeys: "Spare Keys",
  annexAwningWalls: "Annex / Awning Walls",
  weightDistributionGear: "Weight Distribution Gear",
  otherAccessories: "Other Significant Accessories Included",
};






// constant for motorhome reports
export const motorhomeHistoryChecks = [
  {
    key: "writtenOffRecord",
    label: "Written Off Record",
    icon: '<i class="fa-solid fa-car-burst"></i>',
    yesMessage: "Written-off incidents reported",
    noMessage: "Not recorded as written-off",
  },
  {
    key: "stolenRecord",
    label: "Stolen Record",
    icon: '<i class="fa-solid fa-shield-halved"></i>',
    yesMessage: "Listed as stolen",
    noMessage: "No record as stolen",
  },
  {
    key: "financeCheck",
    label: "Finance / PPSR Check",
    icon: '<i class="fa-solid fa-dollar-sign"></i>',
    yesMessage: "Financial interests reported",
    noMessage: "No security interests reported",
  },
  {
    key: "odometerRollback",
    label: "Odometer Check",
    icon: '<i class="fa-solid fa-gauge"></i>',
    yesMessage: "Odometer inconsistency suspected",
    noMessage: "No odometer rollback suspected",
  },
  {
    key: "serviceRecord",
    label: "Service History (vehicle and habitation where supplied)",
    icon: '<i class="fa-solid fa-clipboard-check"></i>',
    yesMessage: "Service records available",
    noMessage: "No service records available",
  },
];


export const motorhomePresetParts = [
  "frontPanelsAndBumper",
  "sidePanelLeft",
  "sidePanelRight",
  "rearPanelAndBumper",
  "paintAndClearCoat",
  "windscreenAndGlass",
  "mirrorsAndExternalFittings",
  "underbodyChassisRails",
  "underbodyCrossmembersFloor",
  "underbodyLeaksOrImpact",
  "habitationRoof",
  "habitationSidePanelLeft",
  "habitationSidePanelRight",
  "rearWall",
  "doorsAndExternalHatches",
  "awningsAndSteps",
  "externalHabitationAccessories",
];


export const motorhomeYesNoParts = [
  "logbook",
  "serviceRecords",
  "gasCertificates",
  "ownerManuals",
  "keys",
  "otherAccessories",
];

export const motorhomeQnAParts = [
  "engineNoise",
  "brakeNoise",
  "driveLineNoise",
];


export const motorhomePartsLookup = {
  media: "Overall photos and video",

  // Vehicle Exterior section
  frontPanelsAndBumper: "Front Panels and Bumper",
  sidePanelLeft: "Left Side Panels",
  sidePanelRight: "Right Side Panels",
  rearPanelAndBumper: "Rear Panel and Bumper",
  paintAndClearCoat: "Paint and Clear Coat",
  windscreenAndGlass: "Windscreen and Other Glass",
  mirrorsAndExternalFittings: "Mirrors and External Fittings",
  underbodyChassisRails: "Underbody - Chassis Rails",
  underbodyCrossmembersFloor: "Underbody - Crossmembers / Floor",
  underbodyLeaksOrImpact: "Underbody - Leaks or Impact Damage",

  // Wheel section
  frontTyres: "Front Tyres",
  rearTyres: "Rear Tyres",
  rearTyresOuter: "Rear Tyres Outer",
  spareTyre: "Spare Tyre",
  wheelsRims: "Wheels / Rims",
  brakeHosesAndLines: "Brake Hoses and Lines (visible)",
  brakeDiscsOrDrums: "Brake Discs / Drums (visible)",
  parkBrakeOperation: "Park Brake Operation",

  // Engine section
  generalEngineBayCondition: "General Engine Bay Condition",
  engineOilLevelAndCondition: "Engine Oil Level and Visible Condition",
  coolantLevelAndCondition: "Coolant Level and Visible Condition",
  otherVisibleFluids: "Other Visible Fluids",
  evidenceOfFluidLeaks: "Evidence of Fluid Leaks",
  hosesAndPipes: "Hoses and Pipes",
  driveBeltsAndPulleys: "Drive Belts and Pulleys",
  batteryTerminalsAndMounting: "Battery, Terminals and Mounting",
  visibleCoolingComponents: "Visible Cooling Components",

  // Test drive section
  engineStart: "Engine Start and Idle",
  enginePerformance: "Engine Performance and Power Delivery",
  engineNoise: "Engine Noise and Smoke Under Load",
  gearbox: "Gearbox Operation",
  clutch: "Clutch Operation (if manual)",
  steering: "Steering Feel and Straight Line Tracking",
  suspension: "Suspension Behaviour",
  serviceBrake: "Service Brake Performance",
  brakeNoise: "Brake Noise / Vibration",
  driveLineNoise: "Driveline Noise",
  cruiseControl: "Cruise Control Operation",
  warningLights: "Warning Lights",

  // Habitation Exterior section
  habitationRoof: "Habitation Roof",
  habitationSidePanelLeft: "Habitation Left Side Panels",
  habitationSidePanelRight: "Habitation Right Side Panels",
  rearWall: "Rear Wall",
  doorsAndExternalHatches: "Doors and External Hatches",
  awningsAndSteps: "Awnings and Steps",
  externalHabitationAccessories: "External Habitation Accessories",

  // Driving cabin section
  driverSeatAndBelt: "Driver Seat and Belt",
  passengerSeatsAndBelts: "Passenger Seat(s) and Belts",
  seatMountsAndAdjusters: "Seat Mounts and Adjusters",
  steeringWheelAndColumn: "Steering Wheel and Column",
  dashboardAndControls: "Dashboard and Controls",
  instrumentClusterAndWarningLights: "Instrument Cluster and Warning Lights",
  indicatorWiperStalks: "Indicator / Wiper Stalks",
  horn: "Horn",
  cabinHeaterAndAirConditioning: "Cabin Heater and Air Conditioning",
  wipersAndWashers: "Wipers and Washers",
  frontWindowsAndSwitches: "Front Windows and Switches",
  centralLocking: "Central Locking",
  mirrorsAndAdjusters: "Mirrors and Adjusters",
  generalCabinCondition: "General Cabin Condition",

  // Living Area section
  loungeSeatingAndDinette: "Lounge Seating and Dinette",
  bedsAndMattresses: "Beds and Mattresses",
  roofLining: "Roof Lining (habitation area)",
  wallPanelsAndCupboards: "Wall Panels and Cupboards",
  floorCondition: "Floor Condition",
  internalDoorsAndPartitions: "Internal Doors and Partitions",
  windowsBlindsAndFlyscreens: "Windows, Blinds and Flyscreens",
  kitchenBenchtopsAndStorage: "Kitchen Benchtops and Storage",
  sinkAndMixer: "Sink and Mixer (Kitchen)",
  bathroomToiletFixtures: "Bathroom / Toilet Fixtures",
  showerBaseAndScreens: "Shower Base and Screens",
  interiorLightingAndSwitches: "Interior Lighting and Switches",
  roofVentsAndFans: "Roof Vents and Fans",
  
  // Utility section
  houseBatteries: "House Batteries (12V Electrical)",
  wiringAndFuses12V: "12V Wiring and Fuses (12V Electrical)",
  chargerSolarControl: "Charger / Solar Regulator / Control Panel (12V Electrical)",

  inlet240V: "240V Inlet (240V Electrical)",
  internalPowerPoints: "Internal Power Points (240V Electrical)",
  rcdSafetySwitch: "RCD / Safety Switch Test Button (240V Electrical)",

  gasCylinders: "Gas Cylinders and Mountings (Gas)",
  gasRegulatorAndHoses: "Regulator and Visible Hoses (Gas)",

  freshWaterTanks: "Fresh Water Tanks and Mounts (Water and Waste)",
  waterPumpAndLines: "Pump Operation and Visible Lines (Water and Waste)",
  kitchenPlumbing: "Kitchen Plumbing (Water and Waste)",
  bathroomPlumbing: "Bathroom Plumbing (Water and Waste)",
  greyBlackWaterTanks: "Grey / Black Water Tanks and Connections (Water and Waste)",

  hotWaterSystem: "Hot Water System (Climate and Appliances)",
  fridge: "Fridge (Climate and Appliances)",
  airConditioner: "Air Conditioner (Climate and Appliances)",
  heater: "Heater (Climate and Appliances)",

  otherFixedAppliances: "Other Major Fixed Appliances (Climate and Appliances)",

  // Documentation section
  logbook: "Vehicle Logbook and Service History",
  serviceRecords: "Motorhome / Habitation Service Records",
  gasCertificates: "Gas / Electrical Certificates (if supplied)",
  ownerManuals: "Owner Manuals",
  keys: "Keys and Remotes",
  otherAccessories: "Accessories Included (annex walls, hoses, leads, ramps, etc)",

};