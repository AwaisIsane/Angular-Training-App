interface nostyp {
    [0]:number,
    [1]:number
}
interface hisdtype {
    date:string[],
    value:number[]
}
export interface historicalData {
    prices:nostyp[],
    market_caps:nostyp[],
    total_volumes:nostyp[],
}

export interface allHistoricalData {
    [keys:string]:hisdtype
}