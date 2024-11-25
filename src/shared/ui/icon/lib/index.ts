import TwitchOutlined from "../../../assets/social/twitch.svg"
import SearchOutlined from "../../../assets/social/search.svg"
import LogoMock from "../../../assets/social/logoMock.svg"
import OnlineOutlined from "../../../assets/social/online.svg"
import BagsOutlined from "../../../assets/header/bags.svg"
import CameraOutlined from "../../../assets/header/camera.svg"
import KingOutlined from "../../../assets/header/king.svg"
import MessageOutlined from "../../../assets/header/message.svg"
import PersonOutlined from "../../../assets/header/person.svg"
import StreamOutlined from "../../../assets/header/stream.svg"
import MenuOutlined from "../../../assets/social/menu.svg"
import ArrowVerticalOutlined from "../../../assets/social/verticalArrow.svg"
import GameOutlined from "../../../assets/streams/game.svg"
import PalleteOutlined from "../../../assets/streams/pallete.svg"
import CupOutlined from "../../../assets/streams/chemp.svg"
import MicroOutlined from "../../../assets/streams/micro.svg"
import DevaiceOutlined from "../../../assets/streams/devaice.svg"

export const enum IconTypes {
  TWITCH_OUTLINED,
  SEARCH_OUTLINED,
  LOGO_MOCK_OUTLINED,
  ONLINE_OUTLINED,
  BAGS_OUTLINED,
  CAMERA_OUTLINED,
  KING_OUTLINED,
  MESSAGE_OUTLINED,
  PERSON_OUTLINED,
  STREAM_OUTLINED,
  MENU_OUTLINED,
  ARROW_VERTICAL_OUTLINED,
  GAME_OUTLINED,
  PALLETE_OUTLINED,
  CUP_OUTLINED,
  MICRO_OUTLINED,
  DEVAICE_OUTLINED
}

export type IconDictionaryType = {
  [key in IconTypes]: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const IconDictionary: IconDictionaryType = {
  [IconTypes.TWITCH_OUTLINED]: TwitchOutlined,
  [IconTypes.SEARCH_OUTLINED]: SearchOutlined,
  [IconTypes.LOGO_MOCK_OUTLINED]: LogoMock,
  [IconTypes.ONLINE_OUTLINED]: OnlineOutlined,
  [IconTypes.BAGS_OUTLINED]: BagsOutlined,
  [IconTypes.CAMERA_OUTLINED]: CameraOutlined,
  [IconTypes.KING_OUTLINED]: KingOutlined,
  [IconTypes.MESSAGE_OUTLINED]: MessageOutlined,
  [IconTypes.PERSON_OUTLINED]: PersonOutlined,
  [IconTypes.STREAM_OUTLINED]: StreamOutlined,
  [IconTypes.MENU_OUTLINED]: MenuOutlined,
  [IconTypes.ARROW_VERTICAL_OUTLINED]: ArrowVerticalOutlined,
  [IconTypes.GAME_OUTLINED]: GameOutlined,
  [IconTypes.PALLETE_OUTLINED]: PalleteOutlined,
  [IconTypes.CUP_OUTLINED]: CupOutlined,
  [IconTypes.MICRO_OUTLINED]: MicroOutlined,
  [IconTypes.DEVAICE_OUTLINED]: DevaiceOutlined
}
export const enum IconSizes {
  SMALL,
  MEDIUM,
  LARGE
}

interface IconSize {
  width: number
  stroke: number
}

export const IconSizeValues: Record<IconSizes, IconSize> = {
  [IconSizes.SMALL]: {
    width: 16,
    stroke: 1
  },
  [IconSizes.MEDIUM]: {
    width: 24,
    stroke: 1.5
  },
  [IconSizes.LARGE]: {
    width: 36,
    stroke: 2.25
  }
}

export interface IconSizeWithHeight extends IconSize {
  height?: number
}

export interface IResponsiveSizes {
  base?: IconSizeWithHeight
  md?: IconSizeWithHeight
  lg?: IconSizeWithHeight
  xl?: IconSizeWithHeight
  xxl?: IconSizeWithHeight
}

export const enum IconRotation {
  DEG_0,
  DEG_45,
  DEG_90,
  DEG_180,
  DEG_270
}

export const IconRotationClasses: Record<IconRotation, string> = {
  [IconRotation.DEG_0]: "rotate-0",
  [IconRotation.DEG_45]: "rotate-45",
  [IconRotation.DEG_90]: "rotate-90",
  [IconRotation.DEG_180]: "rotate-180",
  [IconRotation.DEG_270]: "rotate-270"
}
