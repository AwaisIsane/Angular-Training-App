interface Cryptodata {
    currName:string
    time:number
    high: number,
    low: number,
    open: number,
    volumefrom: number,
    volumeto: number,
    close: number,
    conversionType: string,
    conversionSymbol: string

}


interface CryptoDataall {
    Aggregated: boolean,
    TimeFrom: number,
    TimeTo: number,
    Data:Cryptodata
}

export {CryptoDataall,Cryptodata}