interface State {
  data?: undefined | any;
  error?: undefined | Error;
}

const fetchAction = async (url: string, options: RequestInit) => {
  const state: State = {
    data: undefined,
    error: undefined,
  };

  try {
    const response = await fetch(url, options);
    // console.log('response', response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    state.data = await response.json();
    // console.log('data', data);
  } catch (error) {
    state.error = error as Error;
  }

  return state;
};

export default fetchAction;
