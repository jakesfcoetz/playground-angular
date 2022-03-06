/**==============================================
 * @name          jokeApiC
 * @description   Various constant values used with the joke API
 */
export const jokeApiC = {
  url: 'https://v2.jokeapi.dev/joke',
  categories: ['Any', 'Misc', 'Programming', 'Dark', 'Pun', 'Spooky', 'Christmas'],
  flags: ['nsfw', 'religious', 'political', 'racist', 'sexist', 'explicit'],
  types: ['single', 'twopart'],
} as const;

/**==============================================
 * @interface     JokeRequestParamsI
 * @description   Defines the possible payload options when requesting a new joke
 */
export interface JokeRequestParamsI {
  urlParams?: {
    category?: typeof jokeApiC.categories[number][]; //--- Comma separated url param
  };
  queryParams?: {
    blacklistFlags?: typeof jokeApiC.flags[number][];
    type?: typeof jokeApiC.types[number];
    contains?: string;
  };
}

/**==============================================
 * @interface     JokeResponseI
 * @description   Defines the content of a joke api response
 */

export type JokeResponseI = TypeSinglePartJokeI | TypeTwoPartJokeI;

interface JokeResponseBaseI {
  error: boolean;
  category: typeof jokeApiC.categories[number];
  type: 'single' | 'twopart';
  flags: {
    [K in typeof jokeApiC.flags[number]]: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

interface TypeSinglePartJokeI extends JokeResponseBaseI {
  joke: string;
}

interface TypeTwoPartJokeI extends JokeResponseBaseI {
  setup: string;
  delivery: string;
}
