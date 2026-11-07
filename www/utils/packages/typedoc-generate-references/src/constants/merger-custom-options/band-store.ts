import { FormattingOptionsType } from "types"

const bandStoreOptions: FormattingOptionsType = {
  "^band-store/": {
    maxLevel: 2,
  },
  "^band-store/classes/band-store\\.(Store*|Admin*)": {
    reflectionGroups: {
      Constructors: false,
    },
  },
}

export default bandStoreOptions
