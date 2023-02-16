const BASE_URL = '/';

const HOME = BASE_URL;
const ABOUT = `${BASE_URL}about`;

interface Path {
  HOME: typeof HOME;
  ABOUT: typeof ABOUT;
}

const PATH: Path = {
  HOME,
  ABOUT,
};

export default PATH;
