const APIKEY:string = "4c445bf032284826beebbacdd49d5674";
export class newsapi  { 
    public static getNewsByPlace(countryName:string){
        var url = 'http://newsapi.org/v2/top-headlines?country='+countryName+'&' +
              'apiKey='+APIKEY;
    var req = new Request(url);
     return fetch(req)
    }
 }


