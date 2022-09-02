export interface Coinsdata {
    id:string,
    symbol:string,
    name:string,
    image:{thumb:string},
    market_data:{current_price:{[key:string]:number},
                 //price_change_24h_in_currency:{[key:string]:number},
                 market_cap_rank:number,
                 price_change_percentage_24h:number,
                 price_change_percentage_60d:number,
                 total_supply:string
                }

}
