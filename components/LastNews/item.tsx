import { Item } from "./styles"

interface ItemInterface {
  title: string,
  text: string
}

export default function ItemComponent({
  title, text
}: ItemInterface) {
  return (
    <Item>
      <h3>{title}</h3>
      <h4>{text}</h4>
    </Item>
  )
}