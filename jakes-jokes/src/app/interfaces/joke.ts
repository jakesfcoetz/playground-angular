/**==============================================
 * @name          jokeApiC
 * @description   Various constant values used with the joke API
 */
export const jokeApiC = {
  url: 'https://v2.jokeapi.dev/joke',
  categories: ['Any', 'Misc', 'Programming', 'Dark', 'Pun', 'Spooky', 'Christmas'],
} as const;

/**==============================================
 * @interface     JokeRequestParamsI
 * @description   Defines the possible payload options when requesting a new joke
 */
export interface JokeRequestParamsI {
  category?: typeof jokeApiC.categories[number][]; //--- Comma separated url param
  contains?: string;
}

/**==============================================
 * @interface     JokeResponseI
 * @description   Defines the content of a joke api response
 */

export type JokeResponseI = TypeSinglePartJokeI | TypeTwoPartJokeI | TypeJokeNotFoundI;

interface JokeResponseBaseI {
  error: boolean;
  category: typeof jokeApiC.categories[number];
  type: 'single' | 'twopart';
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
}

export interface TypeSinglePartJokeI extends JokeResponseBaseI {
  joke: string;
}

export interface TypeTwoPartJokeI extends JokeResponseBaseI {
  setup: string;
  delivery: string;
}

export interface TypeJokeNotFoundI {
  error: true;
  internalError: boolean;
  code: number;
  message: string;
  causedBy: string[];
  additionalInfo: string;
  timestamp: number;
}
