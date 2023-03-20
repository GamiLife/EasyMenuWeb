import { defaultThemeValues, IBlockItem, IThemeContext } from './context';

type ThemeAction =
  | { type: 'IS_ENABLE_HOVER'; payload: boolean }
  | { type: 'BLOCK_ID_ACTIVE'; payload: string }
  | { type: 'BLOCK_ID_ACTIVE_FROM_SIDEBAR'; payload: string }
  | { type: 'CURRENT_THEME_BLOCKS'; payload: IBlockItem[] }
  | { type: 'PREVIEW_THEME_BLOCKS'; payload: IBlockItem[] };

export const INITIAL_STATE = {
  ...defaultThemeValues,
};

export const themeReducer = (state: IThemeContext, action: ThemeAction) => {
  switch (action.type) {
    case 'IS_ENABLE_HOVER':
      return {
        ...state,
        isEnabledHover: action.payload,
      };
    case 'BLOCK_ID_ACTIVE':
      return {
        ...state,
        blockIdActive: action.payload,
      };
    case 'BLOCK_ID_ACTIVE_FROM_SIDEBAR':
      return {
        ...state,
        blockIdActiveFromSidebar: action.payload,
      };
    case 'CURRENT_THEME_BLOCKS':
      return {
        ...state,
        currentThemeBlocks: action.payload,
      };
    case 'PREVIEW_THEME_BLOCKS':
      return {
        ...state,
        previewThemeBlocks: action.payload,
      };
    default:
      return state;
  }
};
