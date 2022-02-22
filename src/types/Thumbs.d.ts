interface Item {
  thumb: string;
  image: string;
}

type Items = Item[];
type CurrentIndex = number;
type SetActiveIndex = Dispatch<CurrentIndex>;

interface IThumbsProps {
  items: Items;
  currentIndex: CurrentIndex;
  setActiveIndex: SetActiveIndex;
}
