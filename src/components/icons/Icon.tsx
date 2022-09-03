import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon';
import HeartIcon from './HeartIcon';
import TrashIcon from './TrashIcon';

type TIcon = Record<string, string>;

const Icon: React.FC<TIcon> = (props) => {
  switch (props.name.toLowerCase()) {
    case 'search':
      return <SearchIcon {...props} />;
    case 'close':
      return <CloseIcon {...props} />;
    case 'heart':
      return <HeartIcon {...props} />;
    case 'trash':
      return <TrashIcon {...props} />;
    default:
      return <div></div>;
  }
};

export default Icon;
