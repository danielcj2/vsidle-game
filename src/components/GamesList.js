import { Link } from 'react-router-dom';

export const gamesList = [
  {
    id: 'game-1',
    text: 'Actor',
    added: true,
    path: '/game/actor',
    games: [{
      id: 0,
      answer: ["Robert Downey Jr.", "robert downey jr", "robert downey", "rdj"],
      hints: ["This person recently shaved their head. (past year)", "This person studied ballet at the age of 10.", "This person spent a year in prison.", "/src/img/pic1-cropped.jpg", "This person played a billionare eccentric in one of Hollywood's most popular movie franchises."]
    },
    {
      id: 1,
      answer: ["Morgan Freeman", "morgan", "freeman", "morgan freeman"],
      hints: ["This person is most well-known for their deep and smooth narrator voice.", "This person is an expert beekeeper, in fact they own a 124-acre bee sanctuary.", "/src/img/pic2-cropped.jpg", "This person played Lucius Fox in Christopher Nolan's Batman Film Series.", "This person's middle name is Porterfield."]
    },
    {
      id: 2,
      answer: ["Tom Hanks", "tom", "hanks", "tom hanks"],
      hints: ["This person is a distant relative of Abraham Lincoln.", "This person is an avid typewriter collector.", "This person played the role of a Captain in three different movies, one of which is Apollo 13.", "/src/img/pic3-cropped.jpg", "This person voices a pull-string cowboy in one of the most iconic animated films."]
    },
    {
      id: 3,
      answer: ["Jennifer Aniston", "jennifer", "aniston", "jennifer aniston"],
      hints: ["This person rose to fame for their role in the TV Show Friends.", "This person has dyslexia.", "This person's last name was originally Anastassakis.", "/src/img/pic4-cropped.jpg", "This person starred in the film Bruce Almighty."]
    },
    {
      id: 4,
      answer: ["Denzel Washington", "denzel", "washington"],
      hints: ["Before playing a doctor on TV, this person planned on becoming one.", "This person declined the role of detective David Mills in the movie Se7ven. The role was later given to Brad Pitt.", "This person helped Chadwick Boseman become an actor.", "/src/img/pic5-cropped.jpg", "This person was the leading star in the film Malcom X."]
    },
    {
      id: 5,
      answer: ["Keanu Reeves", "keanu", "reeves"],
      hints: ["This person's first name means 'cool breeze over the mountains' in Hawaiian.", "This actor was branded the nicest person in Hollywood.", "This person voices Duke Caboom in the last chapter of the Toy Story series.", "/src/img/pic6-cropped.jpg", "Johnny Silverhand"]
    }]
  },
  {
    id: 'game-2',
    text: 'Movie',
    added: false,
    path: '/',
    games: [{
      id: 0,
      answer: ["", "", "", ""],
      hints: ["Movie Hint", "Movie Hint 2", "Movie Hint 3", "Movie Hint 4", "Movie Hint 5"]
    }]
  },
  {
    id: 'game-3',
    text: 'Song',
    added: false,
    path: '/',
    games: [{
      id: 0,
      answer: ["", "", "", ""],
      hints: ["Song Hint", "Song Hint 2", "Song Hint 3", "Song Hint 4", "Song Hint 5"]
    }]
  },
  {
    id: 'game-4',
    text: 'Video Game',
    added: false,
    path: '/',
    games: [{
      id: 0,
      answer: ["", "", "", ""],
      hints: ["Video Game Hint", "Video Game Hint 2", "Video Game Hint 3", "Video Game Hint 4", "Video Game Hint 5"]
    }]
  }]

const Games = () => {
  return (
    <>
      {gamesList.map((game) => (<Link to={game.path} className="game d-flex justify-content-center" key={game.id}><h5 className="align-self-center">{game.text}</h5></Link>))}
    </>
  )
}

export default Games
