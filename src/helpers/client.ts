class Client {
  async get(route:string) {
    try{
          const rawData = await fetch(process.env.REACT_APP_API_KEY + route);
    const data = await rawData.json();
    return data;
    }
    catch(error){
      return error;
    }
  }
}

export const client = new Client();
