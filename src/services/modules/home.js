import httpRequest from "..";

export function getHomeGoodPriceData(){
    return httpRequest.get({
        url:"/home/goodprice"
    })
}

export function getHomeHighScoreData(){
    return httpRequest.get({
        url:"/home/highscore"
    })
}