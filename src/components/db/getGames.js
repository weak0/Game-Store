export const getGames = async () => {
  const gamesDb = [];
    console.log(process.env.REACT_APP_BROWSE_DATA);
  const response = await fetch(process.env.REACT_APP_BROWSE_DATA);
  try {
    if (!response.ok) {
      throw new Error("data fetch failed");
    }
    const data = await response.json();
    for (let key in data) {
      const game = data[key];
      for (let val in game) {
        const transformedGame = {
          id: val,
          dbkey: key,
          title: game[val].title,
          genres: game[val].genres[0],
          price: game[val].price,
          image: game[val].image[0],
          released: game[val].relased,
        };
        gamesDb.push(transformedGame);
      }
    }
  } catch (e) {
    alert(e);
  }

  return gamesDb;
};
