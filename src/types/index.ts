type MbtiRank = {
  compatibilityRate: number
}

type MbtiMap1 = {
  [key: string]: MbtiRank
}

export type MbtiMap = {
  [key: string]: MbtiMap1
}

export type CompDesc = {
  [key: number]: string
}
