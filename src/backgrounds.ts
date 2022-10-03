import BackgroundCrewDesktop from "./assets/background-crew-desktop.jpg";
import BackgroundCrewTablet from "./assets/background-crew-tablet.jpg";
import BackgroundCrewMobile from "./assets/background-crew-mobile.jpg";
import BackgroundDestinationDesktop from "./assets/background-destination-desktop.jpg";
import BackgroundDestinationTablet from "./assets/background-destination-tablet.jpg";
import BackgroundDestinationMobile from "./assets/background-destination-mobile.jpg";
import BackgroundHomeDesktop from "./assets/background-home-desktop.jpg";
import BackgroundHomeTablet from "./assets/background-home-tablet.jpg";
import BackgroundHomeMobile from "./assets/background-home-mobile.jpg";
import BackgroundTechnologyDesktop from "./assets/background-technology-desktop.jpg";
import BackgroundTechnologyTablet from "./assets/background-technology-tablet.jpg";
import BackgroundTechnologyMobile from "./assets/background-technology-mobile.jpg";
import TechImgVehicleL from "./assets/technology/image-launch-vehicle-landscape.jpg";
import TechImgVehicleP from "./assets/technology/image-launch-vehicle-portrait.jpg";
import TechImgCapsuleL from "./assets/technology/image-space-capsule-landscape.jpg";
import TechImgCapsuleP from "./assets/technology/image-space-capsule-portrait.jpg";
import TechImgPortL from "./assets/technology/image-spaceport-landscape.jpg";
import TechImgPortP from "./assets/technology/image-spaceport-portrait.jpg";
import { Routes } from "./routes";

export interface BackgroundInterface {
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface TechImageInterface {
  desktop: string;
  tablet: string;
}

export const background = {
  [Routes.CREW_COMMANDER]: {
    desktop: BackgroundCrewDesktop,
    tablet: BackgroundCrewTablet,
    mobile: BackgroundCrewMobile,
  },
  [Routes.CREW_ENGINEER]: {
    desktop: BackgroundCrewDesktop,
    tablet: BackgroundCrewTablet,
    mobile: BackgroundCrewMobile,
  },
  [Routes.CREW_PILOT]: {
    desktop: BackgroundCrewDesktop,
    tablet: BackgroundCrewTablet,
    mobile: BackgroundCrewMobile,
  },
  [Routes.CREW_SPECIALIST]: {
    desktop: BackgroundCrewDesktop,
    tablet: BackgroundCrewTablet,
    mobile: BackgroundCrewMobile,
  },
  [Routes.DESTINATION_MARS]: {
    desktop: BackgroundDestinationDesktop,
    tablet: BackgroundDestinationTablet,
    mobile: BackgroundDestinationMobile,
  },
  [Routes.DESTINATION_MOON]: {
    desktop: BackgroundDestinationDesktop,
    tablet: BackgroundDestinationTablet,
    mobile: BackgroundDestinationMobile,
  },
  [Routes.DESTINATION_TITAN]: {
    desktop: BackgroundDestinationDesktop,
    tablet: BackgroundDestinationTablet,
    mobile: BackgroundDestinationMobile,
  },
  [Routes.DESTINATION_EUROPA]: {
    desktop: BackgroundDestinationDesktop,
    tablet: BackgroundDestinationTablet,
    mobile: BackgroundDestinationMobile,
  },
  [Routes.HOME]: {
    desktop: BackgroundHomeDesktop,
    tablet: BackgroundHomeTablet,
    mobile: BackgroundHomeMobile,
  },
  [Routes.TECHNOLOGY_CAPSULE]: {
    desktop: BackgroundTechnologyDesktop,
    tablet: BackgroundTechnologyTablet,
    mobile: BackgroundTechnologyMobile,
  },
  [Routes.TECHNOLOGY_SPACEPORT]: {
    desktop: BackgroundTechnologyDesktop,
    tablet: BackgroundTechnologyTablet,
    mobile: BackgroundTechnologyMobile,
  },
  [Routes.TECHNOLOGY_VEHICLE]: {
    desktop: BackgroundTechnologyDesktop,
    tablet: BackgroundTechnologyTablet,
    mobile: BackgroundTechnologyMobile,
  },
};

export const img = {
  [Routes.TECHNOLOGY_VEHICLE]: {
    desktop: TechImgVehicleP,
    tablet: TechImgVehicleL,
  },
  [Routes.TECHNOLOGY_SPACEPORT]: {
    desktop: TechImgPortP,
    tablet: TechImgPortL,
  },
  [Routes.TECHNOLOGY_CAPSULE]: {
    desktop: TechImgCapsuleP,
    tablet: TechImgCapsuleL,
  },
};

export const getBackgoundByRoute = (route: string): BackgroundInterface =>
  background[route];

export const getTechImgByRoute = (route: string): TechImageInterface =>
  img[route];
