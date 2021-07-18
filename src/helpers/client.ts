class httpCall {
  async get(route:string) {
    const rawData = await fetch(process.env.REACT_APP_API_KEY + route);
    const data = await rawData.json();
    return data;
  }
}

export const client = new httpCall();
