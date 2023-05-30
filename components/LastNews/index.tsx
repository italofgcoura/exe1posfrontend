import { LastNewsContainer } from "./styles"
import Item from "./item"

const lastNewsMock = [{
  lastNewId: '23f2345ests',
  title: '5 dicas para sua carreira profissional',
  text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
}, {
  lastNewId: '23lh423lh234l',
  title: '5 dicas para sua carreira profissional',
  text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
}, {
  lastNewId: '12fg34g34g34hg',
  title: '5 dicas para sua carreira profissional',
  text: 'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end'
},]

interface lastNewInterface {
  title: string,
  text: string,
  lastNewId: string
}

export default function LastNews() {

  return (
    <LastNewsContainer>
      <h2>Últimas do blog</h2>

      <ul>{lastNewsMock.map((lastNew: lastNewInterface) => (
        <Item
          title={lastNew.title}
          text={lastNew.text}
          key={lastNew.lastNewId}
        />
      ))}
      </ul>
    </LastNewsContainer>
  )
}